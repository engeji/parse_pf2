.. include:: /helpers/roles.rst


.. rst-class:: gm-subchap

.. _ch10--Hazards:

Hazards
==========================================================================================================

.. epigraph::

   *Dungeons are rife with devious traps meant to protect the treasures within. These range
   from mechanical devices that shoot darts or drop heavy blocks to magic runes that
   explode into bursts of flame. In addition to traps, adventurers may stumble into other
   types of hazards, including naturally occurring environmental hazards, mysterious
   hauntings, and more.*

-----------------------------------------------------------------------------



Detecting a Hazard
~~~~~~~~~~~~~~~~~~~~~~

Every hazard has a trigger of some kind that sets its
dangers in motion. For traps, this could be a mechanism
like a trip wire or a pressure plate, while for an
environmental hazard or haunt, the trigger may simply be
proximity. When characters approach a hazard, they have
a chance of finding the trigger area or mechanism before
triggering the hazard. They automatically receive a check
to detect hazards unless the hazards require a minimum
proficiency rank to do so.

During exploration, determine whether the party
detects a hazard when the PCs first enter the general area
in which it appears. If the hazard doesn’t list a minimum
proficiency rank, roll a secret Perception check against
the hazard’s Stealth DC for each PC. For hazards with a
minimum proficiency rank, roll only if someone is actively
searching (using the Search activity while exploring or
the Seek action in an encounter), and only if they have the
listed proficiency rank or higher. Anyone who succeeds
becomes aware of the hazard, and you can describe what
they notice.

Magical hazards that don’t have a minimum proficiency
rank can be found using detect magic, but this spell
doesn’t provide enough information to understand or
disable the hazard—it only reveals the hazard’s presence.
Determining a magical hazard’s properties thoroughly
enough to disable it requires either the use of more
powerful magic or a successful skill check, likely using
Identify Magic or Recall Knowledge. Magical hazards
with a minimum proficiency rank cannot be found with
detect magic at all.




< ... >





Disabling a Hazard
~~~~~~~~~~~~~~~~~~~~~~

The most versatile method for deactivating traps is the
Disable a Device action of the Thievery skill, though
most mechanical traps can also simply be smashed, and
magical traps can usually be counteracted. Environmental
hazards often can be overcome with Nature or Survival,
and haunts can often be overcome with Occultism or
Religion. The specific skill and DC required to disable
a hazard are listed in the hazard’s stat block. As with
detecting a hazard, disabling a hazard might require
a character to have a certain proficiency rank in the
listed skill.


Damaging a Hazard
""""""""""""""""""""

Rather than trying to carefully disable a hazard, a
character might just smash it. Damaging a mechanical
trap or another physical hazard works like damaging
objects: the hazard reduces the damage it takes by its
Hardness. In most cases, hitting the hazard also triggers
it, as explained in Attacking a Hazard below. If a
hazard’s Hit Points are reduced to its Broken Threshold
(BT) or lower, the hazard becomes broken and can’t
be activated, though it can still be repaired. If it’s
reduced to 0 HP, it’s destroyed and can’t be repaired.
(See page 272 in Chapter 6 for more information on
damaging objects.)

< ... >

Attacking a Hazard
^^^^^^^^^^^^^^^^^^^^^^^^^

If someone hits a hazard—especially if it’s a mechanical
trap—they usually trigger it, though you might
determine otherwise in some cases. An attack that breaks
the hazard might prevent it from triggering, depending
on the circumstances. If the hazard has multiple parts,
breaking one part might still trigger the trap. For
example, if a trap has a trip wire in one location and
launches an attack from another location, severing the
trip wire could still trigger the attack. Destroying a
trap in one blow almost never triggers it. These rules
also apply to most damaging spells or other effects in
addition to attacks.

Repairing a Hazard
^^^^^^^^^^^^^^^^^^^^^^^^^

You might allow a character to repair a damaged hazard
to restore its functionality. You determine the specifics of
this, since it can vary by trap. The Repair action might be
insufficient if fixing the trap requires gathering scattered
components or the like. If the item has a Reset entry, the
character needs to do whatever is listed there, in addition
to repairing the damage.



Hazard Format
~~~~~~~~~~~~~~~~

Hazards are presented in a stat block format similar to
those used for monsters. A few notes regarding the format
follow the sample stat block.


.. rst-class:: description

Hazard Name / Hazard [level]
"""""""""""""""""""""""""""""""

- Traits
- Traits
- Traits

**Stealth** This entry lists the Stealth modifier for a complex
hazard’s initiative or the Stealth DC to detect a simple
hazard, followed by the minimum proficiency rank to detect
the hazard (if any) in parentheses. If detect magic can be
used to detect the hazard, this information is located here
as well.

**Description** This explains what the hazard looks like and might
include special rules.

--------------------------

**Disable** The DC of any skill checks required to disable the
hazard are here; if the hazard can be counteracted, its spell
level and counteract DC are listed in parentheses.

**AC** the hazard’s AC; **Saving Throws** the hazard’s saves. Usually
only haunts are subject to Will saves.

**Hardness** the hazard’s Hardness; **HP** the hazard’s Hit Points,
with its Broken Threshold in parentheses; **Immunities** the
hazard’s immunities; **Weaknesses** the hazard’s weaknesses,
if any; **Resistances** the hazard’s resistances, if any

**Action Type** |д-р| or |д-св| This is the reaction or free action the
hazard uses; **Trigger** The trigger that sets off the hazard
appears here. **Effect** For a simple hazard, this effect is often
all the hazard does. For a complex hazard, this might also
cause the hazard to roll initiative.

**Routine** This section describes what a complex hazard does on
each of its turns during an encounter; the number in parentheses
after the word “Routine” indicates how many actions the hazard
can use each turn. Simple hazards don’t have this entry.

**Action** Any action the hazard can use appears here. Typically,
this is a melee or ranged attack.

--------------------------

**Reset** If the hazard can be reset, that information is here.



Level
"""""""""""

The hazard’s level indicates what level of party it’s a good
challenge for. If the hazard involves a toxin, curse, or other
non-spell feature, that feature’s level is the hazard’s level.

Traits
"""""""""""

The most notable hazard traits are trap (constructed to
harm intruders), environmental (natural hazards), and
haunt (spectral phenomena). Traps have a trait to indicate
whether they’re magical or mechanical. Hazards that have
initiative and a routine have the complex trait.

Stealth or Stealth DC
""""""""""""""""""""""""

Complex hazards list their Stealth modifier, which they
use for initiative, instead of their Stealth DC. If you need
the DC, it’s equal to this modifier + 10.



.. rst-class:: gm-hazards

Simple Hazards
~~~~~~~~~~~~~~~~~~~~~~

A simple hazard uses its reaction only once, after which
its threat is over unless the hazard is reset.



Hidden Pit / Hazard 0
"""""""""""""""""""""""""""

- Mechanical
- Trap

**Stealth** DC 18 (or 0 if the trapdoor is disabled or broken)

**Description** A wooden trapdoor covers a pit that’s 10 feet
square and 20 feet deep.

---------------------

**Disable** Thievery DC 12 to remove the trapdoor

**AC** 10; **Fort** +1, **Ref** +1

**Trapdoor Hardness** 3, **Trapdoor HP 12** (BT 6); **Immunities**
critical hits, object immunities, precision damage

**Pitfall** |д-р| **Trigger** A creature walks onto the trapdoor. 
**Effect** The triggering creature falls in and takes falling damage
(typically 10 bludgeoning damage). That creature can use
the Grab an Edge reaction to avoid falling.

---------------------

**Reset** Creatures can still fall into the trap, but the trapdoor
must be reset manually for the trap to become hidden again.



Poisoned Lock / Hazard 1
""""""""""""""""""""""""""""""

- Mechanical
- Trap

**Stealth** DC 17 (trained)

**Description** A spring-loaded, poisoned spine is hidden near
the keyhole of a lock. Disabling or breaking the trap does not
disable or break the lock.

---------------------

**Disable** Thievery DC 17 (trained) on the spring mechanism

**AC** 15; Fort +8, Ref +4

**Hardness** 6, **HP** 24 (BT 12); **Immunities** critical hits, object
immunities, precision damage

**Spring** |д-р| (attack); **Trigger** A creature tries to unlock or Pick the Lock.
**Effect** A spine extends to attack the triggering creature.
**Melee** spine +13, **Damage** 1 piercing plus cladis poison

**Cladis Poison** (poison); **Saving Throw** DC 19 Fortitude; **Maximum
Duration** 4 hours; **Stage 1** 1d6 poison damage and drained 1
(1 hour); **Stage 2** 2d6 poison damage and drained 2 (1 hour);
**Stage 3** 3d6 poison damage and drained 2 (1 hour)




< ... >

Armageddon Orb / Hazard 23
""""""""""""""""""""""""""""

- :rare:`Rare`
- Magical
- Trap

**Stealth** DC 10 or detect magic

**Description** A roiling red orb, forged from a drop of the god
Rovagug’s blood, rains fire from the sky when a specified
condition is met.

---------------------

**Disable** Thievery DC 48 (legendary) to imbue thieves’ tools
with aspects representing Asmodeus and Sarenrae and use
them to drain away the orb’s power over 10 minutes; the
character attempting this check takes 5 fire damage each
round until the orb is depleted

**Burn It All** |д-р| (death, divine, evocation, fire); **Trigger** A special
condition set by the trap’s creator occurs; this is typically
the event of their death. **Effect** Fire rains from the sky in a
100-mile radius, dealing 10d6 fire damage to creatures and
objects in the area. Each creature or object can attempt a DC
46 basic Reflex save. Any creature reduced to 0 Hit Points
by this damage dies instantly. This is not enough damage to
completely burn away a forest or level an entire mountain
or city, but it typically kills most creatures in the area.





.. rst-class:: gm-hazards

Complex Hazards
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Complex hazards function similarly to monsters during
encounters, as they roll initiative and have actions of their
own, though these are usually automated in a routine.



Summoning Rune / Hazard 1
"""""""""""""""""""""""""""""

- Complex
- Magical
- Trap

**Stealth** +7 (trained)

**Description** A cloud of invisible magical sensors in a 10-foot
radius surrounds an invisible wall or floor rune the size of the
creature to be summoned.

---------------------

**Disable** Acrobatics DC 15 to approach without triggering the
trap followed by Thievery DC 17 (trained) to erase the rune, or
dispel magic (1st level; counteract DC 15) to counteract the rune

**Summon Monster** |д-р| (arcane, conjuration, summon; **Trigger**
A creature enters the cloud of magical sensors. **Effect**
This trap summons a specific level 1 creature, determined
when the trap is created. The creature rolls initiative and
remains for 2d6 rounds, after which the spell ends and
the creature disappears. The creature also disappears if
someone disables the trap before the duration expires. The
summoned creature can use 3 actions each round and can
use reactions, unlike most summoned creatures.

---------------------

**Reset** The trap resets each day at dawn.




Drowning Pit / Hazard 3
""""""""""""""""""""""""""""

- Complex
- Mechanical
- Trap

**Stealth** +10 (trained); DC 22 (expert) to notice the water
spouts once the pit opens

**Description** A trapdoor covers a 10-foot-square pit that’s 30
feet deep and has 5 feet of water at the bottom. Four water
spouts in the walls connect to hidden water tanks. Each water
spout extends out of a different wall, 6 inches from the top
of the pit.

---------------------

**Disable** Thievery DC 18 (trained) to seal each water spout,
Thievery DC 22 (trained) to open the trapdoor, or Athletics
DC 22 to Force Open the trapdoor

**AC** 19; **Fort** +8, **Ref** +5

**Trapdoor Hardness** 15, **Trapdoor HP** 60 (BT 30); **Spout
Hardness** 8, **Spout HP** 32 (BT 16); **Immunities** critical hits,
object immunities, precision damage

**Pitfall** |д-р| Trigger A creature walks onto the trapdoor. Effect
The triggering creature falls in and takes damage from the
fall, reduced by 5 feet for falling into the water (typically 12
bludgeoning damage). A creature can Grab an Edge to avoid
falling (page 472). The trapdoor then slams shut, and the
hazard rolls initiative.

---------------------

Routine (4 actions) The trap loses 1 action each turn for each
disabled water spout. On each of the trap’s actions, a spout
pours water, increasing the depth of the water by 5 feet.
Once the pit is full of water, the pit stops using actions, but
creatures in the pit begin drowning (page 478).

---------------------

**Reset** The trap can be reset if the door is manually reengaged
and the water tanks refilled; it can be reset without draining
the pit, but doing so renders it less effective.










.. include:: /helpers/actions.rst