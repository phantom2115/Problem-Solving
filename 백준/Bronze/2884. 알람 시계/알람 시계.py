a, b = map(int, input().split())

if a==0 and b-45 < 0:
    print(24-1, 60-abs(b-45))
elif b-45<0:
    print(a-1, 60-abs(b-45))
else :
    print(a, b-45)