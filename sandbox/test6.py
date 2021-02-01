# def first_word1(text):
#     index = text.find(' ')
#     return text[:index] if index != -1 else text


# print(first_word1("Hello world"))

# a = [4, 5, 2, 3, 4, 5, 6, 8]

# for i in range(len(a), 0, -1):
#     print(a[i-1])

def end_zeros(num: int):
    count = 0
    a = str(num).split(" ")
    for b in range(len(a), 0, -1):
        if a[b-1] == "0":
            count += 1
    return count


print(end_zeros(100100))
