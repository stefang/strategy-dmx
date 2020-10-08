# `iotes/strategy-dmx`

A strategy to send DMX messages via the serial port using node dmx.

## Weirdnesses

Because node serialport doesn't like webpack (AT ALL) to use this in React apps you need to use something like react-app-rewired (or eject the app) to allow serialport to be an external. You then need to include it in the index.html as a global variable on window (ick I know) which the strategy-dmx then looks for to set up the DMX / Serial Port connection

`<script>window.DMX = require('dmx')</script>`

Apps only works in Electron, as you cannot access the serial port from a web browser. The DMX library does work on the command line however, if that help you sanity check your dmx interface is working correctly.

## Usage

```
import strategy from '@iotes/strategy-dmx'

// TODO: DEMONSTRATE USAGE
```

## How to create a strategy 

Documentation on how to create a strategy is [avaliable here](https://iotes.dev/docs/advanced/strategies)