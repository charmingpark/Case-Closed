
arr = [ [ 'a', 'b' ], [ 'c', 'd' ], [ 'e', 'f' ] ]
i = [ 1, 2, 3, 4 ]

i[0] // 1
arr[i[0]] === [ 'a', 'b' ]
arr[i][0] === SyntaxError

i = 1
arr[i][0] === 'c'

////////////////////////////////////

obj = { 0: [ 'a', 'b' ], 1: [ 'c', 'd' ], 2: [ 'e', 'f' ] }
i = [ 1, 2, 3, 4 ]

i[0] // 1
obj[i[0]] === 'c'
obj[i][0] === SyntaxError

i = 1
obj[i][0] === 'c'
