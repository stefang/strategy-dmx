# `iotes/strategy-dmx`

A strategy to send DMX messages via the serial port using node dmx.

## Weirdnesses

Because node serialport doesn't like webpack (AT ALL) to make this work for React apps you have to not have dmx in the dependancies of this strategy. Instead you add it to the parent React App package.json and make sure the app's window/global has dmx added there like this...

`<script>window.DMX = require('dmx')</script>`

This strategy will only work in an Electron app, as you cannot access the serial port from a web browser. The DMX library does work on the command line however, if that help you sanity check your dmx interface is working correctly. Also there is a fork of DMX that supports Brightsign serial bindings you can find at https://github.com/stefang/dmx

## Usage

```
import strategy from '@iotes/strategy-dmx'

// TODO: DEMONSTRATE USAGE
```

## How to create a strategy 

Documentation on how to create a strategy is [avaliable here](https://iotes.dev/docs/advanced/strategies)