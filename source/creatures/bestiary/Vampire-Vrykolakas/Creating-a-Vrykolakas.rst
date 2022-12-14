.. include:: /helpers/roles.rst


.. rst-class:: h3 bst-ability-link
.. _Vampire-Vrykolakas--Creating:

Создание вриколакаса (Creating a Vrykolakas)
------------------------------------------------------------------------------------------------------------

**Источник**: Bestiary 2 pg. 274

Вы можете превратить существующее живое существо во вриколакаса, выполнив следующие действия.

Повысьте уровень существа на 1 и измените его показатели следующим образом.

* Оно получает признаки :t_undead:`нежить` и :t_vampire:`вампир`, и становится :t_evil:`злым`.
* Увеличьте КБ, модификаторы атак, КС, спасброски и модификаторы навыков на 1.
* Увеличьте Скорость на 10 футов или до 40 футов, в зависимости от того, что даст бо́льшую Скорость.
* Увеличьте урон Ударов и других наступательных умений на 1. Если умение может быть использовано лишь ограниченное количество раз (как например "Атака дыханием" дракона), то вместо этого увеличьте такой урон на 2.


.. rst-class:: h4

Основные умения вриколакаса (Basic Vrykolakas Abilities)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Источник**: Bestiary 2 pg. 274

Если у базового существа становящегося вриколакасом есть какие-либо возможности, связанные именно с тем, что оно было живым существом, то оно их теряет.
Оно также теряет любые признаки, которые отражали его жизнь в качестве живого существа, например, :t_human:`человек` и :t_humanoid:`гуманоид`.
Возможно, вам также придется скорректировать умения, которые противоречат тематике вриколакаса.
Все вриколакасы получают следующие умения.


:ref:`cr_ability--Darkvision`

**Быстрый следопыт (Swift Tracker)**: Во время :ref:`Выслеживания (Tracking) <skill--Survival--Track>` вриколакас двигается с полной Скоростью.

:ref:`cr_ability--Negative-Healing`

**Иммунитеты**:
эффекты :t_death:`смерти`,
:t_disease:`болезнь`,
:t_poison:`яд`,
:t_sleep:`сон`,
:c_paralyzed:`парализован`


**Овладение зверем (Feral Possession)** |д-св|
(:t_divine:`сакральный`, :t_necromancy:`некромантия`, :t_incapacitation:`недееспособность`, :t_curse:`проклятие`, :t_possession:`одержимость`, :t_mental:`ментальный`)
**Триггер**: ОЗ вриколакаса снижено до 0, и в пределах 100 футов находится :t_animal:`животное`;
**Эффект**: В отличие от большинства :t_undead:`нежити`, вриколакас не уничтожается когда его ОЗ достигает нуля.
Вместо этого, он пытается вселить свой дух в :t_animal:`животное` в пределах 100 футов, которое должно совершить спасбросок Воли (используйте :ref:`высокий КС по уровню <table--GMG--2-11>` вриколакаса).
При провале животное становится :t_possession:`одержимым`.
Это имеет эффект заклинания :ref:`spell--p--Possession`, но длится количество дней, равное уровню вриколакаса.
Этой одержимости нельзя :ref:`противодействовать <ch9--Counteracting>` магией (однако :ref:`spell--r--Remove-Curse` действует против нее нормально).
При успешном спасброске животного, вриколакас может попытаться овладеть другим животным в пределах 100 футов.
Если в какой-либо момент животное получает крит.успех спасброска или в пределах 100 футов не оказывается животного, вриколакасу не удается никем овладеть и он уничтожается.
Вриколакас овладевший животным сразу ищет свое место погребения (см. далее "Связь с местом погребения"), закапываясь там.
Пока вриколакас находится в этом состоянии восстановления, его животное-носитель :c_paralyzed:`парализовано`, а его обезглавливание уничтожает вриколакаса и убивает носителя.
Снятие проклятия уничтожает вриколакаса и возвращает животное в норму.
Через 1d4 дня, если вриколакас не был уничтожен, животное умирает, а вриколакас восстает в новом теле, идентичном предыдущему, сформированном из останков животного.

.. _Vampire-Vrykolakas--Abilities--Vulnerabilities:

**Уязвимости вриколакаса (Vrykolakas Vulnerabilities)**: У всех вриколакасов есть следующие уязвимости.

* **Связь с местом погребения (Burial Site Bound)**: Вриколакас привязан к месту своей смерти или погребения. Раз в неделю он должен возвращаться на это место и закапываться в землю на 24 часа, в это время он :c_paralyzed:`парализован` и может быть обезглавлен. Если он не может вернуться на это место, его ОЗ снижаются до 0 и он пытается использовать "Овладение зверем"; если это животное-носитель не может вернуться на место захоронения до окончания эффекта одержимости, вриколакас уничтожается, а животное-носитель возвращается в нормальное состояние.

* **Уязвим к обезглавливанию (Vulnerable to Decapitation)**: Обезглавленный вриколакас не может использовать "Овладение зверем", а обезглавленное тело не может восстать вриколакасом.


**Скорость карабканья**: Вриколакас получает Скорость карабканья равную половине своей наземной Скорости.


**Когти (Claws)**:
Если у базового существа были руки, то оно получает безоружный Удар когтями, наносящий рубящий урон и обладающий признаком  :w_agile:`быстрое`.
Используйте средний урон по уровню существа из :ref:`table--GMG--2-10`.

:ref:`cr_ability--Rend` |д-1|
Вриколакас получает действие :ref:`cr_ability--Rend` с когтями.

**Клыки (Fangs)**:
У вриколакаса вырастают длинные, острые и смертоносные зубы, давая ему Удар клыками - безоружная атака, наносящая колющий урон и позволяющая использовать способность "Пить кровь".
Используйте высокий урон по уровню существа из :ref:`table--GMG--2-10`.


**Пить кровь (Drink Blood)** |д-1|
(:t_divine:`сакральный`, :t_necromancy:`некромантия`)
**Требования**: Последним действием вриколакаса был успешный Удар клыками;
**Эффект**: Вриколакас вонзает свои клыки в это существо, чтобы выпить его кровь.
Для этого требуется проверка Атлетики против КС Стойкости существа.
При успехе жертва :c_drained:`истощена 1`, а вриколакас восстанавливает ОЗ, равные 10% от его максимальных ОЗ, получая излишки ОЗ в качестве временных Очков Здоровья.
"Питье крови" у существа, которое уже :c_drained:`истощено`, не восстанавливает вампиру ОЗ, но увеличивает значение :c_drained:`истощения` жертвы на 1.
Вриколакас также может потреблять кровь, слитую в сосуд для питания, но от этого он не получает ОЗ.
Состояние :c_drained:`истощения` жертвы уменьшается на 1 в неделю.
Переливание крови, с проверкой Медицины КС 20 и достаточное количество крови или донор крови, через 10 минут уменьшает :c_drained:`истощение` на 1.



.. rst-class:: h4

Умения вриколакаса-хозяина (Vrykolakas Master Abilities)
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Источник**: Bestiary 2 pg. 275

Особенно могущественные вриколакасы, могут создавать порождений из тел своих жертв и получают дополнительные способности, как подробно описано ниже.
Существа больше или равные 9 уровню могут стать вриколакасами-хозяевами, а 12 уровня и выше, пережившие века могут стать древнии вриколакасами.


**Дети ночи (Children of the Night)**
(:t_divine:`сакральный`, :t_enchantment:`очарование`, :t_mental:`ментальный`)
Присутствие вриколакаса-хозяина вдохновляет ночных существ выползать и выполнять приказы хозяина.
Обычно это :doc:`стаи крыс </creatures/bestiary/Rat/Rat-Swarm>`, :doc:`варги </creatures/bestiary/Warg/index>`, :doc:`вервольфы </creatures/bestiary/Werecreature/Werewolf>` и подобные им существа.
Вриколакас-хозяин может отдавать этим существам телепатические приказы в пределах 100 футов, но они не могут отвечать.


**Пагубная аура (Pestilential Aura)**
(:t_aura:`аура`, :t_divine:`сакральный`, :t_necromancy:`некромантия`)
5 футов.
Существа, начинающие свой ход в этой области, пока вриколакас находится в своей истинной форме, подвержены :ref:`disease--Bubonic-Plague` (спасбросок Стойкости использует :ref:`высокий КС по уровню <table--GMG--2-11>` вриколакаса).


**Врожденные сакральные заклинания**:
Вриколакас-хозяин может творить :ref:`spell--v--Vampiric-Touch` (усиленное до половины своего уровня, округленного до большего) и :ref:`spell--f--Fear` 3-го уровня, как врожденные сакральные заклинания, каждое 3 раз в день.
Он использует высокий КС для своего уровня :ref:`table--GMG--2-11`.


:ref:`cr_ability--Change-Shape` |д-1|
(:t_divine:`сакральный`, :t_transmutation:`трансмутация`, :t_polymorph:`полиморф`, :t_concentrate:`концентрация`)
Вриколакас-хозяин может превращаться в облик напоминающий его тело при жизни, с эффектами :ref:`spell--h--Humanoid-Form` но с неограниченной продолжительностью.
Он теряет Удары клыками и когтями, но получает бонус обстоятельства +2 к проверкам Обмана для :ref:`Перевоплощения (Impersonate) <skill--Deception--Impersonate>` в эту форму.


**Создание порождения (Create Spawn)**
(:t_downtime:`отдых`, :t_divine:`сакральный`, :t_necromancy:`некромантия`)
Если существо умирает после того, как его ОЗ было снижено до 0 с помощью "Питья крови", вриколакас-хозяин может превратить это существо в :doc:`порождение вриколакаса <Vrykolakas-Spawn>`, пожертвовав ему часть своей крови и закопав жертву в землю на 3 ночи.
Такие порождения обычно :c_friendly:`дружественны` к создавшим их вриколакасам, но они не подконтрольны им и обычно бродят сами по себе буйствуя 1d6 дней с момента своего создания.


**Подчинение животного (Dominate Animal)** |д-1|
(:t_divine:`сакральный`, :t_enchantment:`очарование`, :t_incapacitation:`недееспособность`, :t_mental:`ментальный`)
Вриколакас может по желанию творить :ref:`spell--d--Dominate` как врожденное сакральное заклинание, действующее только на :t_animal:`животных`.
КС спасброска - :ref:`высокий КС <table--GMG--2-11>` по уровню вриколакаса, и преуспевшее существо иммунно к "Подчинению животного" этого вриколакаса на 24 часа.
Уничтожение вриколакаса завершает действие эффекта, а снижение его ОЗ до 0 - нет.
Подчиненное животное получает штраф обстоятельства -4 к спасброскам против "Овладения зверем" этого вриколакаса.


**Пить кровь (Drink Blood)**: Как у типичного вриколакаса, но существо :c_drained:`истощено 2`, вместо 1.





.. include:: /helpers/actions.rst