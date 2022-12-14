.. include:: /helpers/roles.rst


.. rst-class:: h3
.. _Vampire-Vetalarana--Creating:

Создание веталарана (Creating a Vetalarana)
------------------------------------------------------------------------------------------------------------

**Источник**: Book of the Dead pg. 160

Хотя лучше всего создавать веталарана с нуля, вы можете превратить имеющееся живое существо в веталарана, выполнив следующие действия.

Повысьте уровень существа на 1 и измените его показатели следующим образом.

* Оно получает признаки :t_undead:`нежить` и :t_vampire:`вампир`, и обычно становится :t_evil:`злым`.
* Увеличьте КБ, модификаторы атак, КС, спасброски и модификаторы навыков на 1.
* Увеличьте урон Ударов и других наступательных умений на 1. Если умение может быть использовано лишь ограниченное количество раз (как например "Атака дыханием" дракона), то вместо этого, увеличьте такой урон на 2.
* Уменьшите ОЗ на количество указанное в таблице.
* Веталаран получает :ref:`быстрое исцеление <cr_ability--Fast-Healing>`, сопротивление ментальному урону и сопротивление физическому урону (кроме :ref:`холодного железа <material--Cold-Iron>`) как указано в таблице. Эти умения являются причиной, по которой у веталарана меньше ОЗ.

.. rst-class:: condensed-table

+-------------------+-------------+-----------------------------------+
| Начальный уровень | Снижение ОЗ | Быстрое исцеление / Сопротивление |
+===================+=============+===================================+
| 3-4               |         -20 |                                 5 |
+-------------------+-------------+-----------------------------------+
| 5-7               |         -30 |                                 7 |
+-------------------+-------------+-----------------------------------+
| 8-14              |         -40 |                                10 |
+-------------------+-------------+-----------------------------------+
| 15+               |         -60 |                                15 |
+-------------------+-------------+-----------------------------------+


.. rst-class:: h4 bst-ability-link
.. _Vampire-Vetalarana--Basic-Abilities:

Основные умения веталарана (Basic Vetalarana Abilities)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Источник**: Book of the Dead pg. 160

Если у базового существа становящегося веталаран есть какие-либо возможности, связанные именно с тем, что оно было живым существом, то оно их теряет.
Оно также теряет любые признаки, которые отражали его жизнь в качестве живого существа, например, :t_human:`человек` и :t_humanoid:`гуманоид`.
Возможно, вам также придется скорректировать умения, которые противоречат тематике веталарана.
Все веталараны получают следующие умения.


**Мыслечувствительность (Thoughtsense)**
(:t_occult:`оккультный`, :t_divination:`прорицание`, :t_mental:`ментальный`)
Веталаран ощущает всех не-:t_mindless:`неразумных` существ в пределах 100 футов точным чувством.


:ref:`cr_ability--Negative-Healing`


**Иммунитеты**:
эффекты :t_death:`смерти`,
:t_disease:`болезнь`,
:t_poison:`яд`,
:t_sleep:`сон`,
:c_paralyzed:`парализован`


**Уязвимости веталарана (Vetalarana Vulnerabilities)**: Все веталараны обладают следующими уязвимостями.

* **Ограниченные чувства (Barred Senses)**: Веталаран не может видеть или ощущать через эффекты :t_force:`силы` или :ref:`холодное железо <material--Cold-Iron>`, и их разум не может пробиться через эффекты :t_force:`силы` или :ref:`холодное железо <material--Cold-Iron>`. Такие преграды могут предотвратить перенос разума веталарана с помощью "Ментального перерождения".

* **Отвращение (Revulsion)**: Веталаран с удовольствием поглощает воспоминания и секреты, и испытывает отвращение к тем, кто открыто делится такими деликатными подробностями. Веталаран не может добровольно приблизиться на 10 футов к существу, которое громко оглашает свои тайные личные секреты или самые сокровенные воспоминания. Убедительное произнесение вслух такой информации - одиночное действие с признаком :t_auditory:`слуховой`, :t_linguistic:`языковой` и :t_concentrate:`концентрация`, защищающее существо до начала своего следующего хода. Если веталаран непроизвольно приближается к существу делящемуся такой информацией, он получает состояние :c_fleeing:`бегство`, пока не убежит от этого существа на расстояние 10 или более футов. Оказавшись подверженным секретам существа 1 раунд, веталаран может одиночным действием с признаком :t_concentrate:`концентрация` совершить спасбросок Воли КС 25. При успехе он преодолевает свое отвращение на 1d6 раундов (или 1 час при крит.успехе).

* **Уязвим к разрушению мозга (Vulnerable to Brain Destruction)**: Веталаран, мозг которого уничтожен, или его ОЗ были снижены до 0, пока он был не способен совершать :t_mental:`ментальные` действия, не может использовать "Ментальное перерождение".


**Ментальное перерождение (Mental Rebirth)**
(:t_occult:`оккультный`, :t_necromancy:`некромантия`, :t_incapacitation:`недееспособность`, :t_curse:`проклятие`, :t_mental:`ментальный`)
В отличие от другой :t_undead:`нежити`, веталаран не уничтожается при 0 ОЗ.
Вместо этого, его тело разрушается, распадаясь в прах, а разум мгновенно переносится в существо, которое он ввел в коматозное состояние с помощью "Истощения мыслей".
Это существо должно находиться в пределах 1 мили; если в этом радиусе нет такого существа, то веталаран уничтожен.
Существо становится :c_controlled:`под контролем` веталарана и теряет состояния :c_stupefied:`одурманен` и :c_unconscious:`без сознания`.
Если существо, :c_controlled:`контролируемое` таким образом веталараном, убито, то разум веталарана переносится в другое существо в пределах 1 мили, которое он ввел в коматозное состояние с помощью "Истощения мыслей".
Через 1d6 дней существо :c_controlled:`под контролем` умирает и его тело превращается в того веталарана, который сделал его коматозным.


**Скорость карабканья**: Веталаран получает Скорость карабканья равную его наземной Скорости.


**Когти (Claws)**: 
Если у существа были руки, то его ногти утолщаются и растут до ужасных размеров, давая ему безоружный Удар когтями, наносящий рубящий урон, обладающий признаком :w_agile:`быстрое` и способный :ref:`Захватывать (Grab) <cr_ability--Grab>`.
Используйте средний урон :ref:`по уровню существа <table--GMG--2-10>`.


**Истощение мыслей (Drain Thoughts)** |д-1|
(:t_occult:`оккультный`, :t_divination:`прорицание`, :t_mental:`ментальный`)
**Требования**: В досягаемости веталарана находится :c_grabbed:`схваченное`, :c_paralyzed:`парализованное`, :c_restrained:`сдерживаемое`, находящееся :c_unconscious:`без сознания` или готовое существо;
**Эффект**: Веталаран хватает существо и поглощает его воспоминания.
Если жертва :c_grabbed:`схвачена`, то для этого требуется проверка Атлетики против КС Стойкости жертвы, а в остальных случаях происходит автоматически.
Жертва :c_stupefied:`одурманена 1`, а веталаран восстанавливает ОЗ, равные 10% от его максимальных ОЗ, получая излишки ОЗ в качестве временных Очков Здоровья.
"Истощение мыслей" у существа, которое уже :c_stupefied:`одурманено`, не восстанавливает веталарану ОЗ, но увеличивает значение :c_stupefied:`одурманенности` жертвы на 1.
В дополнение, веталаран видит одно из воспоминаний жертвы.
Состояние :c_stupefied:`одурманенности` жертвы уменьшается на 1 в неделю.
Жертва ставшая таким образом :c_stupefied:`одурманена 5` впадает в коматозное состояние, становясь навсегда :c_unconscious:`без сознания`.
Пока веталаран жив, коматозная жертва не может прийти в сознание и ее состояние :c_stupefied:`одурманен` не снижается.



.. rst-class:: h4 bst-ability-link

Умения веталарана-манипулятора (Vetalarana Manipulator Abilities)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Источник**: Book of the Dead pg. 161

Чрезвычайно могущественные веталараны, отведавшие мысли сотен или более людей, обретают силу благодаря воспоминаниям и опыту, который они поглотили, преодолевая свои отвращения.
Они получают бо́льший контроль над своими коматозными жертвами, могут манипулировать воспоминаниями и даже парализовать одним прикосновением.
Этих веталаранов называют "манипуляторами", однако те, кто обладает собственными экстрасенсорными способностями, часто предпочитают термины "дойен" или "мыслевидец".

Веталараны-манипуляторы получают дополнительные способности, детально описанные далее.
Существо ниже 10-го уровня недостаточно могущественно, чтобы стать веталараном-манипулятором; вместо этого превратите такое существо в обычного веталарана или переделайте его так, чтобы оно было не ниже 10-го уровня, прежде чем сделать его веталараном-манипулятором.


**Сопротивления (Resistances)**: Веталаран-манипулятор обладает сопротивлением ментальному урону и всему физическому урону (кроме :t_magical:`магического` :ref:`холодного железа <material--Cold-Iron>`).


**Управление коматозным (Control Comatose)**
(:t_exploration:`исследование`, :t_occult:`оккультный`, :t_necromancy:`некромантия`, :t_incapacitation:`недееспособность`, :t_possession:`одержимость`, :t_mental:`ментальный`)
**Частота**: раз в день;
**Эффект**: Веталаран-манипулятор тратит 10 минут, чтобы взять под психический контроль существ, которых он ввел в коматозное состояние с помощью "Истощения мыслей".
Это обладает эффектами заклинания :ref:`spell--p--Possession`, но длится вплоть до 6 часов, имеет дистанцию 1 миля, и веталаран может одновременно контролировать количество коматозных жертв, равное половине своего уровня.
Коматозная жертва не может сопротивляться этой :t_possession:`одержимости` и автоматически критически проваливает спасбросок против "Управление коматозным".
Пока коматозная жертва контролируется веталараном-манипулятором таким способом, у нее временно подавляются состояния :c_stupefied:`одурманен` и :c_unconscious:`без сознания`.


**Истощение мыслей (Drain Thoughts)** |д-1|
(:t_occult:`оккультный`, :t_divination:`прорицание`, :t_mental:`ментальный`)
Как у простого веталарана, но манипулятор может по своему выбору изменить, усилить или стереть просматриваемое воспоминание, как заклинанием :ref:`spell--m--Modify-Memory` 4-го уровня.
Если веталаран при проверке Атлетики для "Истощения мыслей" получает критический успех, то цель :c_stupefied:`одурманена 2`, вместо :c_stupefied:`одурманена 1`.


**Врожденные оккультные заклинания**: Веталаран-манипулятор обладает постоянным врожденным оккультным заклинанием :ref:`spell--t--Tongues`.


**Парализующие когти (Paralyzing Claws)**
(:t_incapacitation:`недееспособность`, :t_occult:`оккультный`, :t_necromancy:`некромантия`)
Любое живое существо, по которому веталаран-манипулятор попал своим Ударом когтями, должно совершить успешный спасбросок Стойкости, иначе будет :c_paralyzed:`парализовано`.
Чтобы закончить этот эффект, цель может совершить новый спасбросок в конце каждого своего хода, и при каждом таком броске, КС совокупно снижается на 1.
Используйте :ref:`средний КС по уровню <table--GMG--2-11>` существа.





.. include:: /helpers/actions.rst