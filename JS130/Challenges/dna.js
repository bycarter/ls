/*
DNA Class
  in: string
  hammingDistance()
    in: string
    out: num
    rules:
      if unequal len, computer over shorter len
      count point mutations
      return count
 */

class DNA {
  constructor(seq1) {
    this.seq = seq1;
  }
  hammingDistance(seq2) {
    let mutationCount = 0;
    let [ shortSeq, longSeq ] = this.seq.length < seq2.length ?
      [this.seq, seq2] :
      [seq2, this.seq];

    for (let idx in shortSeq) {
      if (shortSeq[idx] !== longSeq[idx]) {
        mutationCount += 1;
      }
    }

    return mutationCount;
  }
}

// let dna = new DNA('GCTCT');
// dna.hammingDistance('ACTACTACT');

module.exports = DNA;