.. include:: /helpers/roles.rst


.. rst-class:: creature-details

Каирновое умертвие (Cairn Wight)
============================================================================================================

.. sidebar:: |lore|

	.. rubric:: Панихиды каирновых умертвий (Cairn Wight Dirges)

	**Источник**: Bestiary 2 pg. 292

	В отличие от обычного умертвия, каирновые умертвия обладают необычным родством к музыке.
	Лирика их панихид часто содержит ценную информацию или давно утерянные предания - возможно, это самое большое сокровище, которое они охраняют.
	Есть даже отважные души, которые ищут этих существ, чтобы слушать их песни в надежде извлечь выгоду из сухих, хриплых слов.


Каирновые умертвия - ревностные стражи гробниц, курганов и усыпальниц, обычно появляющиеся на свет в результате некромантических ритуалов.
Для тех смертных, которые не могут смириться с мыслью о разлуке со своим земным имуществом, может быть заманчивым существование в виде нежити, предлагаемое превращением в каирновое умертвие.
Возможно, так же часто, особенно скупые и богатые королевские особы или купцы ищут жертв для превращения в таких умертвий, чтобы те вечно охраняли их драгоценные богатства.

Лишь в редчайших случаях жадность смертного достаточно сильна, чтобы спонтанно превратить его в каирновое умертвие без темного ритуала или заступничества могущественного божественного существа.
Однако, в таких случаях, получившееся умертвие проявляет злобу не имеющую себе равных и, скорее всего, владеет поистине редким сокровищем.

Как хранители материальных ценностей, каирновые умертвия сверхъестественно связаны с оружием, которое они носили во время ритуала при их создании.
Они могут распространять силу своей некромантии на оружие, которым владеют.
Удар меча каирнового умертвия вытягивает жизнь из жертвы.



.. rst-class:: creature
.. _bestiary--Cairn-Wight:

Каирновое умертвие (`Cairn Wight <https://2e.aonprd.com/Monsters.aspx?ID=859>`_) / Существо 4
------------------------------------------------------------------------------------------------------------

- :uncommon:`необычный`
- :alignment:`ПЗ`
- :size:`средний`
- умертвие
- нежить

**Источник**: Bestiary 2 pg. 292

**Восприятие**: +11;
:ref:`ночное зрение <cr_ability--Darkvision>`

**Языки**: Всеобщий,
Некрил


**Навыки**:
Атлетика +12,
Религия +9,
Запугивание +11,
Скрытность +12

**Сил** +4,
**Лвк** +2,
**Тел** +4,
**Инт** +1,
**Мдр** +3,
**Хар** +3


**Предметы**:
длинный меч,
клепаный кожаный доспех

----------

**КБ**: 20;
**Стойкость**: +12,
**Рефлекс**: +10,
**Воля**: +11

**ОЗ**: 67,
:ref:`негативное исцеление <cr_ability--Negative-Healing>`

**Иммунитеты**:
эффекты :t_death:`смерти`,
:t_disease:`болезнь`,
:t_poison:`яд`,
:c_paralyzed:`парализован`,
:c_unconscious:`без сознания`


**Финальная злость (Final Spite)** |д-р|
**Триггер**: ОЗ каирнового умертвия снижены до 0;
**Эффект**: Перед уничтожением каирновое умертвие наносит Удар.
При этом Ударе, оно не получает временных ОЗ от истощения жизни.

----------

**Скорость**: 25 футов


**Ближний бой**: |д-1| длинный меч +14 [+9/+4] (:w_versatile:`универсальное К`),
**Урон** 1d8+7 рубящий + истощение жизни

**Ближний бой**: |д-1| коготь +14 [+10/+6] (:w_agile:`быстрое`),
**Урон** 1d6+7 рубящий + истощение жизни


**Истощение жизни (Drain Life)**
(:t_divine:`сакральный`, :t_necromancy:`некромантия`)
Когда каирновое умертвие наносит живому существу урон своим Ударом связаным оружием или безоружной атакой, то получает 5 временных ОЗ и существо должно совершить успешный спасбросок Стойкости КС 18, иначе будет :c_drained:`истощено 1`.
Дальнейший урон, наносимый каирновым умертвием, при провале спасброска увеличивает состояние :c_drained:`истощения` на 1, до максимального :c_drained:`истощен 4`.


**Погребальная панихида (Funereal Dirge)** |д-2|
(:t_divine:`сакральный`, :t_necromancy:`некромантия`, :t_fear:`страх`, :t_auditory:`слуховой`, :t_emotion:`эмоция`, :t_mental:`ментальный`)
Каирновое умертвие напевает тихую, призрачную мелодию.
Живые существа в пределах 50 футов должны совершить спасбросок Воли КС 21.
Каирновое умертвие не может напевать новую погребальную панихиду 1d4 раунда.

| **Критический успех**: Существо невредимо.
| **Успех**: Существо :c_frightened:`напугано 1`.
| **Провал**: Существо :c_frightened:`напугано 2`.
| **Критический провал**: Существо :c_frightened:`напугано 2` и получает штраф состояния -2 к спасброскам против "Истощения жизни".


**Порождение каирнового умертвия (Cairn Wight Spawn)**
(:t_divine:`сакральный`, :t_necromancy:`некромантия`)
Живой :t_humanoid:`гуманоид` убитый Ударом когтей или оружия каирнового умертвия, восстает порождением умертвия через 1d4 раунда.
Это порождение управляется убившим его каирновым умертвием.
У него нет умений "Истощение жизни" или "Порождение каирнового умертвия" и оно :c_clumsy:`неуклюже 2` пока является умертвием-порождением.
Если создатель этого порождения умирает, порождение становится полноценным, самостоятельным каирновым умертвием; оно восстанавливает свободу воли, получает "Истощение жизни" и "Порождение каирнового умертвия", и перестает быть :c_clumsy:`неуклюжим`.





.. include:: /helpers/actions.rst
.. include:: /helpers/bestiary-icons.rst