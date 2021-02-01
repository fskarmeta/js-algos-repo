

s = {4, 7, 10, 11, 12, 17}
v = 9

bigger = []
smaller = []
for e in s:
    if v > e:
        smaller.append(e)
    if v < e:
        bigger.append(e)

if abs(min(bigger) - v) < abs(max(smaller) - v):
    print(min(bigger))
else:
    print(max(smaller))
