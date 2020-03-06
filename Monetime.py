### Monetime bk v.1

import datetime




stavka = input('Введите вашу ставку:\n\n')

print()

hoursnal = input('Введите час прибытия:\n\n')

print()

minutesnal = input('Введите минуту прибытия:\n\n')

print()

per = datetime.timedelta (hours = int(hoursnal), minutes = int(minutesnal))


hoursend = input('Введите час ухода:\n\n')

print()

minutesend = input('Введите минуту ухода:\n\n')

print()

vtor = datetime.timedelta (hours = int(hoursend), minutes = int(minutesend))

itog = vtor - per

print('Вы отработали ' + str(itog) + ' времени')

print()


babki = itog.total_seconds() / 60  ####


zarplat = int(stavka) / 100

zarplata = (float(zarplat) / 0.6)

pya = float(zarplata) * float(babki)

pyat = itog.total_seconds() / 60

if pyat <= int(269) :
    pya -= int(15)
    print('Что-то мало... У тебя есть тоько одна неоплаченная пятнашка без обеда.')

elif pyat >= int(270) and pyat <= int(509) :
    pya -= int(30)
    print('Неплохо! У тебя есть две неоплаченные пятнашки, но с одним обедом.')

elif pyat >= int(510) and pyat <= int(629) :
    pya -= int(30)
    print('Браво! В твоем арсенале три пятнашки, одна из которой идет за счет компании. У тебя, к тому же, есть один обед.')

elif pyat >= int(630) and pyat <= int(720) :
    pya -= int(30)
    print('''Да ты сам дьявол во плоти! В твоем распоряжении четыре пятнашки из которых две оплачиваются компанией.
А так же не забывай о двух обедах, которые ты можешь взять.''')

    
print()


print('И ты заработаешь на этом ' + str(pya) + ' рублей.')

input()



