

li = [1, 2, 3, 4, 5, 6, 7, 2]

li2 = li * 2


def f(x): return x*2


s = "hola que tal"

print(s.split(" "))
print([c for c in s])


# print([x if x > 2 for x in li])

print(set(filter(lambda x: x > 2, li)))
counter = 0

for num in li:
    if num > 2:
        counter += 1

print(counter)

a = {1, 2, 5, 6, 7, 8}
b = {1, 2, 5}
c = (2, 3, 4, 6)


a.remove(6)
# b.issubset(a)

d = [i for i in c]


o = d.copy()
d[0] = 14
print(d)
print(o)
