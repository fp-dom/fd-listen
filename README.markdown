# fd-listen

[![Build Status](https://travis-ci.org/fp-dom/fd-listen.svg)](https://travis-ci.org/fp-dom/fd-listen) [![npm version](https://badge.fury.io/js/fd-listen.svg)](http://badge.fury.io/js/fd-listen)
> Handle DOM-events FP-style

## Installation

`npm install fd-listen --save`

## Usage

```js
var listen = require('fd-listen');

var onClick = listen('click');
var onClickSetClicked = onClick((event) => {
  event.target.innerHTML = 'clicked';
});

onClickSetClicked(a);
```
