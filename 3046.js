
var isPossibleToSplit = function(nums) {
    const map = new Map();

        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        for (const count of map.values()) {
            if (count > 2) {
                return false;
            }
        }

        return true;
};
console.log(isPossibleToSplit([1, 1, 2, 2, 3, 4]));
