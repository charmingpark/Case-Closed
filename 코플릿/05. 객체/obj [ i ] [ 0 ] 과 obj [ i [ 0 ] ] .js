
arr = [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
i = [ 1, 2, 3, 4 ]

i[0] // 1
arr[i[0]] === [ 'a', 'b' ]
arr[i][0] === SyntaxError

i = 1
arr[i][0] === 'c'
