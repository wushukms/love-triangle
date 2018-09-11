/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let counter;
    counter = 0;
    for (i=0; i<preferences.length; i++) {
        if ((i+1) != preferences[i]){
            if (i == preferences[preferences[preferences[i]-1]-1]-1) {
                counter+=1;
            }
        }
    }
    return counter/3;
    // your implementation
};
