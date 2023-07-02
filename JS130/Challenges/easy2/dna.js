'use strict';
/*
rules:
- calc Hamming distance between two strands
-- total # point mutations
- IF strand lens !=, calc off shorter strand
 */
class DNA {
  constructor(seq1) {
    this.seq = seq1;
  }
  hammingDistance(seq2) {
    /*
    - if either seq len 0 === 0
    algo:
     - SET `shortSeq` = shorter seq
     - SET `longSeq` = other seq
     - SET `totMutations` = 0
     - iterate over idx of `shortSeq`
     -- IF char at idx of `shortSeq` !== `longSeq` -> += `totMutations`
     - RETURN `totMutations`
     */
    let totMutations = 0;
    let shortSeq;
    let longSeq;
    if (this.seq.length < seq2.length) {
      shortSeq = this.seq;
      longSeq = seq2;
    } else {
      shortSeq = seq2;
      longSeq = this.seq;
    }
    for (let idx in shortSeq) {
      if (shortSeq[idx] !== longSeq[idx]) {
        totMutations += 1;
      }
    }
    return totMutations;
  }
}

module.exports = DNA;