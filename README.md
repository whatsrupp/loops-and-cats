# Loops and Cats

## Introduction:

If you're confused about the title of this project:
- It's a loop station application.
- 'Boots and Cats' is a beatboxer's equivalent of 'Hello World'. (say it over and over with enough force and you'll start to sound like a drum loop)

A loop station, in short, works like this:

!["The Basics Of Looping"](/docs/images/large/loop-cycle.png)

A loopstation allows a single musician to quickly build up layers of music . They're very popular in the beatboxing and street-performance community.

The idea behind this project was to dive deep into hardware, media streams, multithreading as well as timing issues due to the asynchronous nature of audio file loading.

## The Plan:

In two weeks, we're going to try and build a live looping application. The MVP specification is outlined below!

After an initial brainstorm (see below) we put together a minimum viable product (MVP)

## MVP:

- Create a web app
- Record two Files
- Play them simultaneously
- Loop them
- Make it look presentable

![Brainstorm](/docs/images/large/brainstorm.png)

## Testing
It's difficult to test and area in which you're doing a lot of learning, but we've decided to use Mocha and Zombie.

Mocha: For unit testing, both synchronous and asynchronous.

Zombie: provides a headless browser to test the functionality of the user interface.

## Temporal Semantics

To be honest, this is a pretentious title for 'How we dealt with function timings during this project'.

When dealing with asynchronous file-loads and concurrent threads (in this context, playing multiple streams at once). It was important to consider how the audio could stay in time indefinitely. The diagram below attempts to summarise this. It's enough to understand that all file processing is done before the track is meant to play so that they play on time. For further reading, Sam Aaron, creator of Sonic Pi, a live coding music synthesizer, wrote a paper on the temporal semantics of live music coding. Heavy read, but very interesting. Read it [here](https://www.doc.ic.ac.uk/~dorchard/publ/farm14-sonicpi.pdf).

![Temporal Semantics](/docs/images/large/temporal-semantics.png)

## Developers
We're a small team of 4 aiming to build this product in 2 weeks. Fingers crossed!

- [Jack Bittiner](https://github.com/jackbittiner)
- [Nick Rupp](https://github.com/whatsrupp)
- [Will Schweir](https://github.com/w-schwier)
- [Vivien Tang](https://github.com/honjintang)
