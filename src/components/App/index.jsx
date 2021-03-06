import React, { Component } from 'react'

import P5Wrapper from '../P5Wrapper'

import { FullStackCraftProductionLabel } from '../FullStackCraftProductionLabel'

// data
import oJSONDataRank1 from '../../data/data_rank_1';
import oJSONDataRank2 from '../../data/data_rank_2';
import oJSONDataRank3 from '../../data/data_rank_3';
import oJSONDataRank4 from '../../data/data_rank_4';
import oJSONDataRank5 from '../../data/data_rank_5';
import oJSONDataRank6 from '../../data/data_rank_6';
import oJSONDataRank7 from '../../data/data_rank_7';
import oJSONDataRank8 from '../../data/data_rank_8';
import oJSONDataRank9 from '../../data/data_rank_9';
import oJSONDataRank10 from '../../data/data_rank_10';
import oJSONDataRank11 from '../../data/data_rank_11';
import oJSONDataRank12 from '../../data/data_rank_12';
import oJSONDataRank13 from '../../data/data_rank_13';
import oJSONDataRank14 from '../../data/data_rank_14';
import oJSONDataRank15 from '../../data/data_rank_15';
const aData = [oJSONDataRank1, oJSONDataRank2, oJSONDataRank3, oJSONDataRank4, oJSONDataRank5, oJSONDataRank6, oJSONDataRank7, oJSONDataRank8, oJSONDataRank9, oJSONDataRank10, oJSONDataRank11, oJSONDataRank12, oJSONDataRank13, oJSONDataRank14, oJSONDataRank15];

// images
const schematic = require('../../images/schematic.svg');
const sampleInvaders = require('../../images/sample_invaders.svg');

export default class App extends Component {
    onSetAppState = (newState, cb) => this.setState(newState, cb)

    render() {
        let aElements = [];
        let canvasWidth = window.innerWidth > 690 ? 690 : window.innerWidth; // start width calculation for canvases at 690px, otherwise screen width
        for (var i = 0; i < 15; i++) {
          let canvasId = "canvas" + i.toString() + "-container";
          aElements.push(
            <div key={i}>
              <h3>Invaders of Rank {i+1} ({aData[i].length.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} Total):</h3>
              <P5Wrapper
                  p5Props={{ data: aData[i], canvasId, canvasWidth }}
                  onSetAppState={this.onSetAppState}
              />
            </div>
          );
        }
        return (
          <div className="container" style={{marginBottom: '1rem'}}>
              <h1>Invasion of the Invaders!</h1>
              <img alt="Sample Invaders." className="sampleInvaders" src={sampleInvaders}/>
              <h2><i>What's an Invader?</i></h2>
              <p>An 'Invader' is a 5 x 5 group of blocks representing a retro-style alien invader, likely inspired from <a target="_blank" rel="noopener noreferrer"  href="https://en.wikipedia.org/wiki/Space_Invaders">1978 the NES game Space Invaders.</a></p>
              <p>More specifically, an Invader is an array of 15 independently activated or deactivated blocks, arranged in any order, which is then partially reflected along the y axis (1 reflecting to 1', 6 reflecting to 6', and so on) forming the complete 25 block, 5 x 5 group of blocks:</p> 
              <img alt="Invader schematic." className="schematic" src={schematic}/>
              <p>There are 2<sup>15</sup>-1 possible unique combinations of this configuration, or 32,768 - 1 = 32,767. We subtract 1 from 32,768, since the Invader with all 15 blocks unactivated would be an empty 5 x 5 group of blocks. (Oppositely, an Invader with all 15 blocks activated is a solid 5 x 5 group of blocks.)</p>
              <p>Invaders can be further separated by 'rank' - the number of blocks out of the original 15 that have been activated for a given Invader. I've rendered all possible combinations of these Invaders and grouped them by rank.</p>
              <p>View the <a target="_blank" rel="noopener noreferrer" href="https://chrisfrew.in/data-challenge-rendering-all-32767-invaders">technical blog post with backend and frontend source codes here.</a></p>
              <p>Enjoy the amazing shapes and forms these Invaders produce!</p>
              {aElements}
              <h3>Sources and Inspiration</h3>
              <p>Originally inspired by <a target="_blank" rel="noopener noreferrer" href="https://www.skillshare.com/projects/Experimenting-with-Processing-and-HYPE/18021?via=user-profile">Jerome Herr's work on Skillshare from 2013</a>.</p>
              <p>Jerome Herr was inspired (as was I, subsequently) by <a target="_blank" rel="noopener noreferrer" href="http://www.complexification.net/gallery/machines/invaderfractal/">Jared Tarbell's work from 2003</a>. I used Jerome's Processing Java code for a starting point, then converting it to p5.js and fixed invader values (as apposed to random generation) <a href="https://pastebin.com/umz39Yus">can be found here</a>.</p>
              <p>Jared was the real computational hero and <a target="_blank" rel="noopener noreferrer" href="http://www.complexification.net/gallery/machines/invaderfractal/flash/invaderFractall.html">provided an interactive flash applet for the fractal art</a> (clicking on any Invader subsequently renders a new Invader in-place, check it out! I'm also working on retreiving the .fla source code to a modern language or tool... but it's harder than you'd think!)</p>
              <FullStackCraftProductionLabel/>
          </div>
        )
    }
}
