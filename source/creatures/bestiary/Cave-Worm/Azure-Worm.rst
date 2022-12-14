.. include:: /helpers/roles.rst


.. rst-class:: creature-details

Лазурный червь (Azure Worm)
============================================================================================================

Лазурный червь это темно-синее существо, которое чувствует себя как дома в затопленных туннелях, а не в сухих пещерах.
Хотя лазурный червь хорошо плавает, он предпочитает затаиться в стенах, полу или даже потолке затопленных пещер, готовый выскочить и устроить засаду на существ, проплывающих мимо его укрытия.
Лазурного червя особенно ненавидят и боятся народы Темноземья, потому что зарывшийся в туннель лазурный червь, часто приносит с собой воды из подземной реки или озера, являющихся его домом.
Когда становится очевидно, что лазурный червь находится рядом с поселением Темноземья, жители быстро создают охотничий отряд, чтобы справиться с угрозой до того, как червь навлечет разрушения.



.. rst-class:: creature
.. _bestiary--Azure-Worm:

Лазурный червь (`Azure Worm <https://2e.aonprd.com/Monsters.aspx?ID=74>`_) / Существо 15
------------------------------------------------------------------------------------------------------------

- :uncommon:`необычный`
- :alignment:`Н`
- :size:`исполинский`
- земноводный
- животное

**Источник**: Bestiary pg. 57

**Восприятие**: +22;
:ref:`ночное зрение <cr_ability--Darkvision>`,
:ref:`виброчувствительность <cr_ability--Tremorsense>` (неточное) 100 футов

**Навыки**:
Атлетика +33,
Скрытность +20 (+25 в воде)

**Сил** +10,
**Лвк** -1,
**Тел** +8,
**Инт** -5,
**Мдр** -1,
**Хар** -1

----------

**КБ**: 35;
**Стойкость**: +32,
**Рефлекс**: +20,
**Воля**: +23

**ОЗ**: 320


**Непоколебимость (Inexorable)**:
Червь восстанавливается от состояний :c_paralyzed:`парализован`, :c_slowed:`замедлен` и :c_stunned:`ошеломлен` в конце своего хода.
Еще он иммунен к штрафам к Скоростям и состоянию :c_immobilized:`обездвижен`, а также игнорирует сложную и особо сложную местность.


**Прийти в себя (Shake It Of)** |д-р|
**Частота**: раз в день;
**Триггер**: Червь будет подвержен состоянию или неблагоприятному эффекту (такому как :ref:`spell--b--Baleful-Polymorph`);
**Эффект**: Червь отменяет спровоцировавшее состояние или эффект.
Этим способом нельзя избежать эффектов от :t_artifact:`артефактов`, божеств или подобных мощных источников.

----------

**Скорость**: 40 футов,
рытье 40 футов,
плавание 60 футов


**Ближний бой**: |д-1| челюсти +31 [+26/+21] (досягаемость 15 фт, :w_deadly:`смертельное 2d10`),
**Урон** 3d12+16 колющий + :ref:`cr_ability--Improved-Grab`

**Ближний бой**: |д-1| жало +31 [+27/+23] (досягаемость 15 фт, :w_agile:`быстрое`, :t_poison:`яд`),
**Урон** 4d6+16 колющий + яд лазурного червя

**Ближний бой**: |д-1| тело +29 [+24/+19] (досягаемость 15 фт),
**Урон** 2d8+14 дробящий


:ref:`cr_ability--Swallow-Whole` |д-1| :s_huge:`огромный`, 3d8+10 дробящий, Разрыв 27

**Быстрое проглатывание (Fast Swallow)** |д-р|
**Триггер**: Червь :ref:`Хватает (Grabs) <cr_ability--Grab>` существо;
**Эффект**: Червь использует :ref:`cr_ability--Swallow-Whole`.


**Прыжок из воды (Breach)** |д-2|
Лазурный червь :ref:`Плывет (Swims) <skill--Athletics--Swim>` вплоть до своей Скорости плавания, потом вертикально :ref:`Выпрыгивает (Leaps) <action--Leap>` из воды на высоту вплоть до 30 футов, нанося Удар по существу в вершине прыжка (это позволяет атаковать существо на расстоянии вплоть до 45 футов от водной поверхности).
После Удара, червь ныряет обратно в воду.
Для этого Удара он может использовать :ref:`cr_ability--Improved-Grab` и продолжить его "Быстрым проглатыванием".


**Молотить (Thrash)** |д-2|
Червь наносит 1 Удар по каждому существу в его досягаемости.
Он может Ударить вплоть до 1 раза челюстями, вплоть до 1 раза жалом и сколько угодно раз телом.
Каждая атака считается к штрафу множественной атаки, но штраф не увеличивается, пока червь не закончит все эти атаки.


**Яд лазурного червя (Azure Worm Venom)**
(:t_poison:`яд`)

| **Спасбросок**: Стойкость КС 37
| **Макс.продолжительность**: 6 раундов
| **Стадия 1**: 3d6 урона ядом и :c_clumsy:`неуклюжесть 2` (1 раунд)
| **Стадия 2**: 4d6 урона ядом и :c_clumsy:`неуклюжесть 2` (1 раунд)
| **Стадия 3**: 6d6 урона ядом и :c_clumsy:`неуклюжесть 2` (1 раунд)





.. include:: /helpers/actions.rst