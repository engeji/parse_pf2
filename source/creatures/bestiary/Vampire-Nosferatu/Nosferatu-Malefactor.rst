.. include:: /helpers/roles.rst


.. rst-class:: creature-details

Носферату-злодей (Nosferatu Malefactor)
============================================================================================================

Измученные возрастом и вечным голодом, носферату-злодеи сеют за собой чуму и жаждут крови смертных.



.. rst-class:: creature
.. _bestiary--Nosferatu-Malefactor:

Носферату-злодей (`Nosferatu Malefactor <https://2e.aonprd.com/Monsters.aspx?ID=1357>`_) / Существо 10
------------------------------------------------------------------------------------------------------------

- :uncommon:`необычный`
- :alignment:`НЗ`
- :size:`средний`
- вампир
- нежить

**Источник**: Bestiary 3 pg. 284

**Восприятие**: +19;
:ref:`ночное зрение <cr_ability--Darkvision>`

**Языки**: Акло,
Всеобщий,
Некрил;
:ref:`телепатия <cr_ability--Telepathy>` 60 футов

**Навыки**:
Акробатика +21,
Атлетика +19,
Аркана +21,
Обман +17,
Запугивание +19,
Скрытность +23

**Сил** +5,
**Лвк** +7,
**Тел** +3,
**Инт** +7,
**Мдр** +5,
**Хар** +3

----------

**КБ**: 30;
**Стойкость**: +17,
**Рефлекс**: +21,
**Воля**: +19

**ОЗ**: 135,
:ref:`быстрое исцеление <cr_ability--Fast-Healing>` 10,
:ref:`негативное исцеление <cr_ability--Negative-Healing>`,
:ref:`восстановление в чумном гробу <Vampire-Nosferatu--Abilities--Plagued-Coffin-Restoration>`

**Иммунитеты**:
эффекты :t_death:`смерти`,
:t_disease:`болезнь`,
:t_poison:`яд`,
:t_sleep:`сон`,
:c_paralyzed:`парализован`

**Сопротивления**: физический 10 (кроме магического дерева)


**Уязвимости носферату (Nosferatu Vulnerabilities)**

* **Отвращение (Revulsion)**: Носферату не может добровольно приблизиться на расстояние 10 футов к размахиваемому чесноку или размахиваемому религиозному символу незлого божества. Чтобы махать чесноком или религиозным символом, существо должно :ref:`Взаимодействовать (Interact) <action--Interact>`, чтобы делать это в течение 1 раунда (аналогично :ref:`action--Raise-a-Shield`). Если носферату непроизвольно приближается к объекту своего отвращения на расстояние 10 футов, он получает состояние :c_fleeing:`бегство`, убегая от субъекта своего отвращения, пока не закончит действие на расстоянии более 10 футов от него. После 1 раунда нахождения под воздействием субъекта своего отвращения, носферату может одиночным действием с признаком :t_concentrate:`концентрация` совершить спасбросок Воли КС 25. При успехе он преодолевает свое отвращение на 1d6 раундов (или 1 час при крит.успехе).
* **Кол (Stake)**: Магический деревянный кол (например подверженный руне :ref:`мощи оружия <item--Weapon-Potency>`, :ref:`spell--m--Magic-Weapon` или подобной магии), вбитый в сердце носферату, снижает его ОЗ до 0 и не позволяет ему исцелиться выше 0 ОЗ, даже в своем гробу. Вбивание кола в носферату требует 3 действий и работает только в том случае, если носферату находится :c_unconscious:`без сознания`. Если кол извлечен, носферату снова может исцелиться выше 0 ОЗ, а если он находится в своем гробу, то 1-часовой период отдыха начинается после извлечения кола. Если отрубить голову носферату и помазать ее :ref:`Святой водой (Holy Water) <item--Holy-Water>`, пока кол находится на месте, носферату будет уничтожен.
* **Солнечный свет (Sunlight)**: Если носферату попадает под прямые солнечные лучи, он немедленно становится :c_slowed:`замедлен 1`. Значение :c_slowed:`замедления` увеличивается на 1 каждый раз, когда носферату заканчивает свой ход на солнечном свету, и это состояние заканчивается когда он больше не на солнечном свету. Если таким способом носферату теряет все свои действия, то он уничтожается.

----------

**Скорость**: 30 футов,
карабканье 25 футов


**Ближний бой**: |д-1| клыки +23 [+18/+13] (:w_finesse:`точное`),
**Урон** 2d12+11 колющий + "Пить кровь"

**Ближний бой**: |д-1| коготь +23 [+19/+15] (:w_agile:`быстрое`, :w_finesse:`точное`),
**Урон** 2d10+11 колющий + чума древних


**Пить кровь (Drink Blood)** |д-1|
(:t_divine:`сакральный`, :t_necromancy:`некромантия`)
**Требования**: Последним действием носферату был успешный Удар клыками;
**Эффект**: Носферату вонзает свои клыки в целевое существо, чтобы выпить его кровь.
Для этого требуется проверка Атлетики против КС Стойкости существа.
При успехе, целевое существо :c_drained:`истощено 1`, а носферату восстанавливает 13 ОЗ, получая излишки ОЗ в качестве временных Очков Здоровья.
"Питье крови" у существа, которое уже :c_drained:`истощено`, не восстанавливает носферату ОЗ, но увеличивает значение :c_drained:`истощения` жертвы на 1.
Носферату также может потреблять кровь, слитую в сосуд для питания, но от этого он не получает ОЗ.
Состояние :c_drained:`истощения` целевого существа уменьшается на 1 в неделю.
Переливание крови, с проверкой Медицины КС 20 и достаточное количество крови или донор крови, через 10 минут уменьшает :c_drained:`истощение` на 1.


:ref:`cr_ability--Change-Shape` |д-1|
(:t_divine:`сакральный`, :t_transmutation:`трансмутация`, :t_polymorph:`полиморф`, :t_concentrate:`концентрация`)
Носферату превращается в рой бледно-серых крыс.
Он получает наземную Скорость 30 футов и Скорость карабканья 10 футов и становится :s_large:`большого` размера.
Каждый враг в пространстве роя получает 2d10 колющего урона и должен совершить простой спасбросок Рефлекса КС 29.
Существо провалившее спасбросок подвергается чуме древних (см. далее).


**Врожденные сакральные заклинания** КС 29

| **5 ур.** :ref:`spell--t--Telekinetic-Haul` (×3)


**Подчинение (Dominate)** |д-2|
(:t_divine:`сакральный`, :t_enchantment:`очарование`, :t_incapacitation:`недееспособность`, :t_visual:`визуальный`, :t_mental:`ментальный`)
Носферату может творить :ref:`spell--d--Dominate` по желанию, как врожденное сакральное заклинание.
Для его сотворения нужно пристально смотреть в глаза цели, что придает заклинанию :t_visual:`визуальный` признак.
Для спасброска используется КС 29, и преуспевшее существо временно иммунно к Подчинению этого носферату на 24 часа.
Полное уничтожение носферату прекращает подчинение, но простого снижения носферату до 0 ОЗ недостаточно для снятия заклинания.


**Командовать порабощенным (Command Thrall)** |д-св|
(:t_divine:`сакральный`, :t_auditory:`слуховой`, :t_mental:`ментальный`)
**Требования**: Присутствует один из рабов и он может слышать носферату;
**Эффект**: Носферату дает 1 команду, одному из рабов, которую раб в свой ход выполняет так хорошо как может, в силу своих умений.


**Чума древних (Plague of Ancients)**
(:t_disease:`болезнь`, :t_virulent:`вирулентный`)

| **Спасбросок**: Стойкость КС 29
| **Возникновение**: 1 день
| **Стадия 1**: :c_drained:`истощен 1` (1 день)
| **Стадия 2**: :c_drained:`истощен 2` и :c_enfeebled:`ослаблен 2` (1 день)
| **Стадия 3**: :c_doomed:`обречен 1`, :c_drained:`истощен 3` и :c_enfeebled:`ослаблен 3` (1 день)
| **Стадия 4**: :c_doomed:`обречен 2`, :c_drained:`истощен 3` и :c_enfeebled:`ослаблен 3` (1 день)
| **Стадия 5**: :c_unconscious:`без сознания` (1 день)
| **Стадия 6**: смерть





.. include:: /helpers/actions.rst