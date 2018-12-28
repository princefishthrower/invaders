# Invasion of the Invaders!

## What's an Invader?
An 'Invader' is a 15 x 15 group of blocks representing a retro-style alien invader, likely inspired from 1978 the NES game Space Invaders.

More specifically, an Invader is an array of 15 independently activated or deactivated blocks, arranged in any order, which is then partially reflected along the y axis, like so (1 reflecting to 1', 6 reflecting to 6', and so on):

!(Invader schematic)[https://github.com/frewinchristopher/invaders/blob/master/src/images/schematic.svg]

There are 215-1 possible unique combinations of this configuration, or 32,768 - 1 = 32,767. One must be subtracted from 32,768, since the Invader with all 15 blocks unactivated would be an empty 15 x 15 block. (Oppositely, an Invader with all 15 blocks activated is a sold 15 x 15 block.)

Invaders can be further separated by 'rank' - the number of blocks out of the original 15 that have been activated for a given Invader. I've rendered all possible combinations of these Invaders and grouped them by rank.

<p>View the <a target="_blank" href="https://chrisfrew.in/data-challenge-rendering-all-32767-invaders">technical blog post with backend and frontend source codes here.</a></p>

<p>Originally inspired by <a target="_blank" href="https://www.skillshare.com/projects/Experimenting-with-Processing-and-HYPE/18021?via=user-profile">Jerome Herr's work on Skillshare from 2013</a>.</p>
<p>Jerome Herr was inspired (as was I, subsequently) by <a target="_blank" href="http://www.complexification.net/gallery/machines/invaderfractal/">Jared Tarbell's work from 2003</a>.</p>
<p>Jared was the real computational hero and <a href="http://www.complexification.net/gallery/machines/invaderfractal/flash/invaderFractall.html">provided an interactive flash applet for the fractal art</a> (clicking on any Invader subsequently renders a new Invader in-place, check it out! I'm also working on retreiving the .fla source code to a modern language or tool... but it's harder than you'd think!)</p>