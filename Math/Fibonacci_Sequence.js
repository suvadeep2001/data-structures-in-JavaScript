/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if(n < 2)return n;
    let Fib = [0,1];

	for(let i = 2; i <=n; i++)
	{
		Fib[i] = Fib[i - 1] + Fib[i - 2]
	}

	return Fib[n];
};