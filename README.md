jQuery Cache
============

This is a cache system to use with jQuery, so that you dont have to perform the
same selectors over and over or endirt your global namespace with jquery filled
vars.

How it works
------------

Include the code in cache.js in your project, and to use it:

### Add cached items

To add an item to the cache at the begining or init of your code do a:

    $c.add('entryName', 'selector');

For example to cache all the divs with class `special box`:

    $c.add('specialBoxes', '.specialbox');

### Get cached items

To get an item from the cache you do:

    var $something = $c.get('entryName');

For example if we wanted to retrieve the special boxes we would do:

    var $sb = $c.get('specialBoxes');

### Refresh some cache entry

There may be times where you need to refresh the cache because the elements set
has changed. When you want that you do:

    $c.refresh('entryName');

What is this useful for?
------------------------

For starters all your selectors will be in the initialisation of your code
together, so they are easier to change and identify without going through all
your code. 

It also uses a lazy retrieval so your selector will not be executed until the
first time you call the cache to get the entry, so no extra jQuery selections
and such.

Anything else?
--------------

In a not far future I will add also the capability to accept jQuery objects
when adding entries, if somebody wants to do that, I would be grateful.



That's it for now, give it a try and bring us your comments.
