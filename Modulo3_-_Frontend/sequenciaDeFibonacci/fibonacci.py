alg = int(input("Digite quantos algarismos você quer ver: "))
fn_1 = 1
fn_2 = 1
fib_num = 1
i = c = 0
while i < alg:
    fib_num = fn_1 + fn_2
    if c == 0:
        fn_1 = fib_num
        c += 1
    elif c==1:
        fn_2 = fib_num
        c = 0
    i += 1
    print(fib_num,fn_1,fn_2)