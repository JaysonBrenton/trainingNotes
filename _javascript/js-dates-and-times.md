---
layout: single
title: Date & Time
permalink: /javascript/js-date-time/
toc: true
toc_label: "On This Page"
toc_icon: "list-ul"  # corresponding Font Awesome icon name (without fa prefix)
date: 2018-05-08
header:
  overlay_image: /assets/images/reflections2.jpg
---

<br>

## Use the Date Object
{% highlight javascript linenos %}
  let val;
  const today = new Date();
  let bDay1 = new Date('01-21-1971 11:25:00'); // This 'MM-DD-YYYY'=invalid date error. Must be 'DD-MM-YYYY'
  let bDay2 = new Date('September 11 1971');
  let bDay3 = new Date('02/18/1988');

  console.log(today); // Fri May 25 2018 14:21:55 GMT+1000 (AEST)
  console.log(bDay1); // Thu Jan 21 1971 11:25:00 GMT+1000 (AEST)
  console.log(bDay2); // Sat Sep 11 1971 00:00:00 GMT+1000 (AEST)
  console.log(bDay3); // Thu Feb 18 1988 00:00:00 GMT+1100 (AEDT)
{% endhighlight %}

## Year, Month, Day, Hours, Minutes & Seconds
{% highlight javascript linenos %}
  const today = new Date();
  let birthday = new Date('01-21-1971 11:25:00');
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDay();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let ms = today.getMilliseconds();
  let ts = today.getTime();

  console.log(`Today: ${today}`); // Today: Fri May 25 2018 15:38:41 GMT+1000 (AEST)
  console.log(`Year: ${year}`); // Year: 2018
  console.log(`Month: ${month}`); // Month: 4
  console.log(`Day: ${day}`); // Day: 5
  console.log(`Hours: ${hours}`); // Hours: 15
  console.log(`Minutes ${minutes}`); // Minutes 38
  console.log(`Seconds: ${seconds}`); // Seconds: 41
  console.log(`MS: ${ms}`); // MS: 825
  console.log(`TS: ${ts}`); // TS: 1527229377449 (seconds since January 1st, 1970)

  // Set the values
  let birthday = new Date('01-21-1971 11:25:00');
  console.log(`Current Birthday: ${birthday}`); // Current Birthday: Thu Jan 21 1971 11:25:00 GMT+1000 (AEST)

  birthday.setMonth(2)
  console.log(`New Month: ${birthday.getMonth(2)}`); // New Month: 2

  birthday.setDate(12)
  console.log(`New Date: ${birthday.getDate(12)}`); // New Date: 12

  birthday.setFullYear(1985)
  console.log(`New Year: ${birthday.getFullYear(1985)}`); // New Year: 1985

  birthday.setHours(3)
  console.log(`New Hours: ${birthday.getHours(3)}`); // New Hours: 3

  birthday.setMinutes(25)
  console.log(`New Minutes: ${birthday.getMinutes(25)}`); // New Minutes: 25

  birthday.setSeconds(16)
  console.log(`New Seconds: ${birthday.getSeconds(16)}`); // New Seconds: 16

{% endhighlight %}

More info on the javascript date object [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
