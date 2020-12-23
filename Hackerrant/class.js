function angryProfessor(k, a) {
    return a.map(el => el <= 0).filter(el => el == true).length < k ? "YES" : "NO"

}