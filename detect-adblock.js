/*
Copyright (C) 2022  wackyblackie
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
// Create the notice.
document.body.style.scrollBehavior = 'smooth';
var d=document.createElement('div');
d.style.position = 'absolute';
d.style.top = '0';
d.style.width = '0';
d.style.height = '0';
var e=document.createElement('div');
e.style.background = '#dd0000';
e.style.color = '#000000';
e.style.margin = '0 0 0 0';
e.style.overflowX = 'hidden';
e.style.width = 'calc(100vw - 2rem)';
e.style.position = 'fixed';
e.style.top = '0';
e.style.display = atob('bm9uZQ');
e.style.textAlign = 'center';
e.style.padding = '0.5rem';
e.style.fontFamily = atob('LWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlm');
e.id = 'ZnVuZGluZ05vdGljZQ';
e.innerHTML = atob('T3VyIHdlYnNpdGUgaXMgbWFkZSBwb3NzaWJsZSBieSBkaXNwbGF5aW5nIG9ubGluZSBhZHZlcnRpc2VtZW50cyB0byBvdXIgdmlzaXRvcnMuIDxicj5QbGVhc2UgY29uc2lkZXIgc3VwcG9ydGluZyB1cyBieSBkaXNhYmxpbmcgeW91ciBhZCBibG9ja2VyIG9yIHRyYWNraW5nIHByZXZlbnRvci4=');
d.appendChild(e);
document.body.appendChild(d);
d = null; e = document.querySelector('div#ZnVuZGluZ05vdGljZQ');

// Create the urls known to be trackers.
var dc8d9a73f18b = [
    'aHR0cHM6Ly9wYWdlYWQyLmdvb2dsZXN5bmRpY2F0aW9uLmNvbS9wYWdlYWQvanMvYWRzYnlnb29nbGUuanM=',
    'aHR0cHM6Ly9nb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXQvcGFnZWFkL2h0bWwv',
    'aHR0cHM6Ly93d3cuZ29vZ2xlLWFuYWx5dGljcy5jb20vYW5hbHl0aWNzLmpz',
    'aHR0cHM6Ly93d3cuY2xhcml0eS5tcy90YWcv',
    'aHR0cHM6Ly9wYXJ0bmVyLmdvb2dsZWFkc2VydmljZXMuY29tL2dhbXBhZC9jb29raWUuanM/ZG9tYWluPQ',
    'aHR0cHM6Ly9nb29nbGVhZHMuZy5kb3VibGVjbGljay5uZXQvcGFnZWFkL2Fkcz9jbGllbnQ9aHR0cHM6Ly9wYXJ0bmVyLmdvb2dsZWFkc2VydmljZXMuY29tL2dhbXBhZC9jb29raWUuanM='
]

// Show the notice (when called).
function fc7708e77933(aW5mbw) {
    console.error(atob('QWR2ZXJ0aXNtZW50IE5vdGljZTogUGxlYXNlIGVuYWJsZSBhZHMgdG8gc3VwcG9ydCBvdXIgc2VydmljZS4='));
    document.querySelector('#ZnVuZGluZ05vdGljZQ').style.display = atob('YmxvY2s');
    void(aW5mbw);
}

// Create logs of failed attempts.
var f1ee75f697b9 = [];
var cd091045a94b = [];

// Use fetch to test for trackers. Appends logs if failed.
dc8d9a73f18b.forEach(function(dXJs) {
    fetch(atob(dXJs), {'mode': 'no-cors'}).then(
function(){
    f1ee75f697b9.push(atob('ZmFsc2U'));
},
function(ZQ){
    f1ee75f697b9.push(atob('dHJ1ZQ'));
    cd091045a94b.push(dXJs);
    fc7708e77933(ZQ);
    console.info(ZQ);
}
    );
});

// Check if any trackers were found. Display the notice if so.
if (cd091045a94b.length > 0 && cd091045a94b.indexOf(atob('dHJ1ZQ')) != -1) {
    cd091045a94b.forEach(function(ZFhKcw){console.error(atob('VVJMIEJsb2NrZWQ6IA==')+ZFhKcw);});
    fc7708e77933();
    console.info(f1ee75f697b9);
    console.info(cd091045a94b);
} else if (cd091045a94b == 0 && cd091045a94b.indexOf('true') != -1) {
    document.querySelector('#ijRwbfnWQVSH').style.display = atob('ZmxleA');
    console.info(atob('QWRzIHNob3VsZCBiZSB2aXNpYmxlIQ=='));
    console.info(f1ee75f697b9);
    console.info(cd091045a94b);
}
if (typeof undefined === 'undefined') {console.log(undefined);} 

// Based off of https://gist.github.com/wackyblackie/ecfb210428561921fc5bf020e50c0773 by wackyblackie.