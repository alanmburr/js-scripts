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
// Create the script, hour, and attribute variables.
var script = document.querySelector('script[src="https://cdn.jsdelivr.net/gh/wackyblackie/js-scripts/dark-mode.js"]') || 
    document.querySelector('script[data-source="wackyblackie/js-scripts/dark-mode.js"]');
const hour = new Date().getHours();
var attribute = [
    script.getAttribute('data-bg-color') || '#3d3d3d', // background color, Attribute 0
    script.getAttribute('data-text-color') || '#fefefe', // text color, Attribute 1
    script.getAttribute('data-link-color') || '#6c9ddc', // link color, Attribute 2
    script.getAttribute('data-on-time') || '20', // time to turn on, Attribute 3
    script.getAttribute('data-off-time') || '6', // time to turn off, Attribute 4
];
console.info(attribute);
// Check the time and set the body background and text color.
if (hour >= Number(attribute[3]) || hour <= Number(attribute[4])) {
    document.body.style.backgroundColor = attribute[0];
    document.body.style.color = attribute[1];
    document.querySelectorAll('a').forEach(function(link) {
        link.style.color = attribute[2];
    });
} else if (hour >= Number(attribute[4]) || hour < Number(attribute[3])) {
    document.body.style.backgroundColor = attribute[1];
    document.body.style.color = attribute[0];
    document.querySelectorAll('a').forEach(function(link) {
        link.style.color = attribute[2];
    });
}
if (typeof undefined === 'undefined') {console.log(undefined);}