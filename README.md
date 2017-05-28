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

## MVP User Stories:

```
As a loop musician
So that I can stack my tracks
I want to be able to 2 audio tracks and see them visualised
```

```
As a loop musician
So that I can group my loops
I want to have my tracks play in synch
```

```
As a loop musician
So that I can repeat my beats
I want my recorded tracks to infinitely loop
```

```
As a loop musician
So that I know what I'm doing
I want a vaguely coherent user interface
```

![Brainstorm](/docs/images/large/brainstorm.png)

MVP V2

```
As a musician
So that I can cue my loops
I only want recording to start at the start of each bar
```

```
As a loop musician
So that I have more creative flexibility
I want to have 8 loop tracks
```

```
As a loop musician
So that I can perfect a track
I want to be delete a bad track
```

```
As a loop musician
So that I can record in time
I want to be able to hear a metronome
```



## Testing
It's difficult to test and area in which you're doing a lot of learning, but we've decided to use Mocha and Zombie.

Mocha: For unit testing, both synchronous and asynchronous.

Zombie: provides a headless browser to test the functionality of the user interface.

## Temporal Semantics

To be honest, this is a pretentious title for 'How we dealt with function timings during this project'.

When dealing with asynchronous file-loads and concurrent threads (in this context, playing multiple streams at once). It was important to consider how the audio could stay in time indefinitely. The diagram below attempts to summarise this. It's enough to understand that all file processing is done before the track is meant to play so that they play on time. For further reading, Sam Aaron, creator of Sonic Pi, a live coding music synthesizer, wrote a paper on the temporal semantics of live music coding. Heavy read, but very interesting. Read it [here](https://www.doc.ic.ac.uk/~dorchard/publ/farm14-sonicpi.pdf).

![Temporal Semantics](/docs/images/large/temporal-semantics.png)

# Technology Shoutouts

## Web Audio API

As humans, we are exposed to and listen to a lot of music. As a result of this, we all have an inbuilt preconception about how music should sound. One of the bigger preconceptions is timing. Badly timed music, even if only by a fraction of a second, can be unsettling to listen to. Scaling this up to 8 badly timed infinite loops, the unsettling feeling would quickly turn into a jarring annoyance. It was clear from the beginning of the project that if we couldn't crack the synching of audio tracks then the end product could only ever be seen as ineffective.

Web Audio API was indispensible in dealing with this problem. It was an effective way to bring reliable timing to a single threaded Javascript codebase.
After calling the Web Audio API, you gain access to a clock accurate to 16 decimal places (The limit of a floating point number in vanilla Javascript without the use of a big number library!). What this enables you to do is cue and synch events to an accurate clock without the fear that high resource actions such as resizing your browser or streaming video in another tab will stall the timing of your audio samples. Voila!
The web audio API docs can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

## WaveSurfer

This is an excellent audio visualiser library, it allows you to display and scroll through waveforms of your recordings quickly.
Would thoroughly recommend to anyone building an audio app. Check it out [here](https://wavesurfer-js.org/).

## Metronome


## Developers
We're a small team of 4 aiming to build this product in 2 weeks. Fingers crossed!

- [Jack Bittiner](https://github.com/jackbittiner)
- [Nick Rupp](https://github.com/whatsrupp)
- [Will Schweir](https://github.com/w-schwier)
- [Vivien Tang](https://github.com/honjintang)
