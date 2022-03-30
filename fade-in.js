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
if (Number(window.getComputedStyle(document.body).getPropertyValue("opacity")) > 0) {
    document.body.style.opacity = 0;
    setTimeout(function(){void(0); opcaitize();}, 10);
}
function opcaitize() {
    var opacity, intervalID = 0;
    window.addEventListener('load', function() {
        setInterval(function() {
            var body = document.body;
            opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
            if (opacity < 1) {opacity = opacity + 0.1; body.style.opacity = opacity}
            else {clearInterval(intervalID)}
        }, 50);
    });
    if (typeof undefined === 'undefined') {console.log(undefined);}
    // Adapted from: https://www.geeksforgeeks.org/how-to-add-fade-in-effect-using-pure-javascript/
}