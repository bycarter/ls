const { dbQuery } = require("./db-query");

module.exports = class PgPersistence {

	// constructor(session) {
	// 	this._todoLists = session.todoLists || deepCopy(seedData);
	// 	session.todoLists = this._todoLists;
	// }
	// Are all of the todos in the todo list done? If the todo list has at least
	// one todo and all of its todos are marked as done, then the todo list is
	// done. Otherwise, it is undone.
	isDoneTodoList(todoList) {
		return todoList.todos.length > 0 && todoList.todos.every(todo => todo.done);
	}

	// Does the todo list have any undone todos? Returns true if yes, false if no.
	hasUndoneTodos(todoList) {
		return todoList.todos.some(todo => !todo.done);
	}

	// Returns a promise that resolves to a sorted list of all the todo lists
	// together with their todos. The list is sorted by completion status and
	// title (case-insensitive). The todos in the list are unsorted.
	async sortedTodoLists() {
		const ALL_TODOLISTS = "SELECT * FROM todolists ORDER BY lower(title) ASC";
		const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

		let result = await dbQuery(ALL_TODOLISTS);
		let todoLists = result.rows;

		for (let index = 0; index < todoLists.length; ++index) {
			let todoList = todoLists[index];
			let todos = await dbQuery(FIND_TODOS, todoList.id);
			todoList.todos = todos.rows;
		}

		return this._partitionTodoLists(todoLists);
	}

	// Returns a promise that resolves to a sorted list of all the todos in the
	// specified todo list. The list is sorted by completion status and title
	// (case-insensitive).
	async sortedTodos(todoList) {
		const SORTED_TODOS = "SELECT * FROM todos" +
			"  WHERE todolist_id = $1" +
			"  ORDER BY done ASC, lower(title) ASC";

		let result = await dbQuery(SORTED_TODOS, todoList.id);
		return result.rows;
	}

	// Returns a copy of the indicated todo in the indicated todo list. Returns
	// `undefined` if either the todo list or the todo is not found. Note that
	// both IDs must be numeric.
	async loadTodo(todoListId, todoId) {
		const FIND_TODO = "SELECT * FROM todos WHERE todolist_id = $1 AND id = $2";

		let result = await dbQuery(FIND_TODO, todoListId, todoId);
		return result.rows[0];
	}

	// Returns a promise that resolves to the todo list with the specified ID. The
	// todo list contains the todos for that list. The todos are not sorted. The
	// Promise resolves to `undefined` if the todo list is not found.
	async loadTodoList(todoListId) {
			const FIND_TODOLIST = "SELECT * FROM todolists WHERE id = $1";
			const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

			let resultTodoList = dbQuery(FIND_TODOLIST, todoListId);
			let resultTodos = dbQuery(FIND_TODOS, todoListId);
			let resultBoth = await Promise.all([resultTodoList, resultTodos]);

			let todoList = resultBoth[0].rows[0];
			if (!todoList) return undefined;

			todoList.todos = resultBoth[1].rows;
			return todoList;
	}

	// Toggle a todo between the done and not done state. Returns a promise that
	// resolves to `true` on success, `false` if the todo list or todo doesn't
	// exist. The id arguments must both be numeric.
	async toggleDoneTodo(todoListId, todoId) {
		const TOGGLE_DONE = "UPDATE todos SET done = NOT done" +
			"  WHERE todolist_id = $1 AND id = $2";

		let result = await dbQuery(TOGGLE_DONE, todoListId, todoId);
		return result.rowCount > 0;
	}

	// Set a new title for the specified todo list. Returns `true` on success,
	// `false` if the todo list isn't found. The todo list ID must be numeric.
	setTodoListTitle(todoListId, title) {
	// 	let todoList = this._findTodoList(todoListId);
	// 	if (!todoList) return false;
	//
	// 	todoList.title = title;
	// 	return true;
	}

	// Mark all todos on the todo list as done. Returns `true` on success,
	// `false` if the todo list doesn't exist. The todo list ID must be numeric.
	async completeAllTodos(todoListId) {
		const COMPLETE_TODOS = "UPDATE todos SET done = true " +
			"WHERE todolist_id = $1 AND done != true";
		let result = await dbQuery(COMPLETE_TODOS, todoListId);

		return result.rowCount > 0;
	}

	// Delete the specified todo from the specified todo list. Returns `true` on
	// success, `false` if the todo or todo list doesn't exist. The id arguments
	// must both be numeric.
	async deleteTodo(todoListId, todoId) {
		const DELETE_TODO = "DELETE FROM todos WHERE todolist_id = $1 AND id = $2";

		let result = await dbQuery(DELETE_TODO, todoListId, todoId);
		return result.rowCount > 0;
	}

	// Delete a todo list from the list of todo lists. Returns `true` on success,
	// `false` if the todo list doesn't exist. The ID argument must be numeric.
	async deleteTodoList(todoListId) {
		const DELETE_TODOLIST = "DELETE FROM todolists WHERE id = $1";

		let result = await dbQuery(DELETE_TODOLIST, todoListId);
		return result.rowCount > 0;
	
	}

	// Create a new todo with the specified title and add it to the indicated todo
	// list. Returns `true` on success, `false` on failure.
	async createTodo(todoListId, title) {
		const CREATE_TODO = "INSERT INTO todos (todolist_id, title) " +
			"VALUES ($1, $2)";

		let result = await dbQuery(CREATE_TODO, todoListId, title);
		return result.rowCount > 0;
	}

	// Create a new todo list with the specified title and add it to the list of
	// todo lists. Returns `true` on success, `false` on failure. (At this time,
	// there are no known failure conditions.)
	createTodoList(title) {
	// 	this._todoLists.push({
	// 		title,
	// 		id: nextId(),
	// 		todos: [],
	// 	});
	//
	// 	return true;
	}

	// Returns `true` if a todo list with the specified title exists in the list
	// of todo lists, `false` otherwise.
	existsTodoListTitle(title) {
	// 	return this._todoLists.some(todoList => todoList.title === title);
	}

	// Returns a reference to the todo list with the indicated ID. Returns
	// `undefined`. if not found. Note that `todoListId` must be numeric.
	_findTodoList(todoListId) {
	// 	return this._todoLists.find(todoList => todoList.id === todoListId);
	}

	// Returns a reference to the indicated todo in the indicated todo list.
	// Returns `undefined` if either the todo list or the todo is not found. Note
	// that both IDs must be numeric.
	_findTodo(todoListId, todoId) {
	// 	let todoList = this._findTodoList(todoListId);
	// 	if (!todoList) return undefined;
	//
	// 	return todoList.todos.find(todo => todo.id === todoId);
	}

	// Returns a new list of todolists partitioned by completion status.
	_partitionTodoLists(todoLists) {
		let undone = [];
		let done = [];

		todoLists.forEach(todoList => {
			if (this.isDoneTodoList(todoList)) {
				done.push(todoList);
			} else {
				undone.push(todoList);
			}
		});

		return undone.concat(done);
	}
};