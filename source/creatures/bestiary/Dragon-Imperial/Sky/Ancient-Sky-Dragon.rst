.. include:: /helpers/roles.rst


.. rst-class:: creature
.. _bestiary--Ancient-Sky-Dragon:

Древний небесный дракон (`Ancient Sky Dragon <https://2e.aonprd.com/Monsters.aspx?ID=1130>`_) / Существо 18
------------------------------------------------------------------------------------------------------------

- :rare:`редкий`
- :alignment:`ПД`
- :size:`исполинский`
- электричество
- дракон

**Источник**: Bestiary 3 pg. 80

**Восприятие**: +32;
:ref:`ночное зрение <cr_ability--Darkvision>`,
:ref:`нюх <cr_ability--Scent>` (неточное) 60 футов,
туманное зрение

**Языки**: Ауран,
Небесный,
Всеобщий,
Драконий,
Эльфийский,
Инфернальный,
Сильван

**Навыки**:
Атлетика +35,
Акробатика +28,
Запугивание +32,
Обман +28,
Скрытность +28,
Выживание +28,
Общество +26,
Религия +34

**Сил** +8,
**Лвк** +4,
**Тел** +5,
**Инт** +4,
**Мдр** +6,
**Хар** +6


**Туманное зрение (Mist Vision)**: Туман и дымка не мешают зрению небесного дракона; он игнорирует состояние :c_concealed:`сокрытия` от тумана и дымки.

----------

**КБ**: 42;
**Стойкость**: +31,
**Рефлекс**: +28,
**Воля**: +32;
+1 состояния ко всем спасброскам от магии

**ОЗ**: 335

**Иммунитеты**:
:t_electricity:`электричество`,
:t_sleep:`сон`,
:c_paralyzed:`парализован`


**Противится огню (Countered by Fire)**: Если небесный дракон получает урон огнем, стихийная магия металла внутри него закаляется.
До конца своего следующего хода, он получает штраф обстоятельства -1 к броскам атак и КБ, а его Удары челюстями не наносят электрический урон.
Это ограничение заканчивается если дракон использует "Атаку дыханием".


**Подпитывается землей (Fed by Earth)**
(:t_divine:`сакральный`, :t_abjuration:`преграждение`)
Когда небесный дракон является целью :t_earth:`земляного` заклинания или эффекта, он оставляет облако измельченной пыли и гравия, которые кружатся вихрями от драконьего полета.
На 1 минуту, дракон :c_concealed:`скрыт` во время полета.


:ref:`cr_ability--Frightful-Presence`
(:t_aura:`аура`, :t_fear:`страх`, :t_emotion:`эмоция`, :t_mental:`ментальный`)
90 футов, КС 38

----------

**Скорость**: 60 футов,
полет 160 футов


**Ближний бой**: |д-1| челюсти +36 [+31/+26] (досягаемость 20 фт, :t_magical:`магический`),
**Урон** 3d10+16 колющий + 1d12 электричество

**Ближний бой**: |д-1| коготь +36 [+32/+28] (досягаемость 15 фт, :w_agile:`быстрое`, :t_magical:`магический`),
**Урон** 3d10+16 рубящий + :ref:`cr_ability--Grab`

**Ближний бой**: |д-1| хвост +36 [+31/+26] (досягаемость 30 фт, :t_magical:`магический`),
**Урон** 3d10+16 дробящий + :ref:`cr_ability--Grab`


:ref:`cr_ability--Greater-Constrict` |д-1| 3d10+11 дробящий, КС 40


**Божественная молния (Divine Lightning)**
(:t_divine:`сакральный`)
Добрый небесный дракон, поклоняющийся божеству, направляет божественную энергию через свои атаки, делая их более эффективными против :t_fiend:`бесов` и :t_undead:`нежити`.
Любой наносимый им электрический урон, становится уроном добра против :t_fiend:`бесов` или позитивным уроном против :t_undead:`нежити`.


**Атака дыханием (Breath Weapon)** |д-2|
(:t_divine:`сакральный`, :t_evocation:`эвокация`, :t_electricity:`электричество`)
Дракон выпускает шар электричества 30-футовым взрывом на расстояние 60 футов, наносящий 9d12 урона электричеством и 2d12 урона звуком (простой спасбросок Рефлекса КС 40) (+ см. "Божественная молния").
Он не может снова использовать "Атаку дыханием" 1d4 раунда.


**Ошеломляющее электричество (Stunning Electricity)** |д-2|
(:t_divine:`сакральный`, :t_evocation:`эвокация`, :t_incapacitation:`недееспособность`, :t_electricity:`электричество`)
Дракон быстро сворачивается, затем выпускает трещащую молнию, наносящую 5d12 урона электричеством в 60-футовой эманации.
Каждое существо в области должно совершить спасбросок Стойкости КС 40; независимо от исхода, после этого существо временно иммунно на 10 минут.

| **Критический успех**: Существо невредимо.
| **Успех**: Половина урона и существо :c_stunned:`ошеломлено 1`.
| **Провал**: Полный урон и существо :c_stunned:`ошеломлено` на 1 раунд и не может летать 4 раунда.
| **Критический провал**: Двойной урон и существо :c_stunned:`ошеломлено` на 2 раунда и не может летать 1 минуту.


**Сворачивающееся неистовство (Coiling Frenzy)** |д-2|
Дракон в любом порядке наносит 1 Удар когтями и 1 Удар хвостом, каждый по одной и той же цели.
Если любой из этих Ударов попадает, дракон автоматически :ref:`Хватает (Grabs) <cr_ability--Grab>` цель.


**Врожденные сакральные заклинания** КС 42

| **4 ур.**
| :ref:`spell--g--Gaseous-Form`
| :ref:`spell--i--Invisibility`
| **1 ур.**
| :ref:`spell--f--Feather-Fall`
| :ref:`spell--g--Gust-Of-Wind`


**Драконий импульс (Draconic Momentum)**: Когда дракон совершает критическое попадание Ударом, он перезаряжает свою "Атаку дыханием".


**Совершенный полет (Perfected Flight)**: Небесный дракон может зависать на месте не тратя действие, и он автоматически преуспевает во всех проверках Акробатики для :ref:`skill--Acrobatics--Maneuver-in-Flight`.





.. include:: /helpers/actions.rst