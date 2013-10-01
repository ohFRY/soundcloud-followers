/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/*
 * TERMS OF REPRODUCTION USE
 *
 * 1. Provide a link back to the original repository (this repository), as
 *      in, https://github.com/ohFRY/soundcloud-followers, that is well-visible
 *      wherever the source is being reproduced.  For example, should you
 *      display it on a website, you should provide a link above/below that
 *      which the users use, titled something such as "ORIGINAL AUTHOR".
 *
 * 2. Retain these three comments:  the GNU GPL license statement, this comment,
 *      and that below it, that details the author and purpose.
 *
 * Failure to follow these terms will result in me getting very angry at you
 * and having your software tweaked or removed if possible.  Either way, you're
 * still an idiot for not following such a basic rule, so at least I'll have
 * that going for me.
 */

/*
 * NOTE:  This is all procedural as hell because prototypes and any
 *          OOP techniques in Javascript are stupid and confusing.
 *
 * @author  Fry Falavel
 *
 * @version 0.1
 */
/*
 *
 * USAGE:   run this script when you are on http://followback.me/explore/*
 */

(function () {

    // add jquery just in case
    var script = document.createElement('script');
    script.src = 'http://code.jquery.com/jquery-1.10.2.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    function main() {

        var thearray = $('.username');

        thearray.each(function(key, value) {
            var a = document.createElement('a');
            a.href = 'http://code.jquery.com/jquery-1.10.2.min.js';
            a.class = '.btn-success'; 
            a.appendChild(document.createTextNode(value.text);
            $('.pull-right')[key].appendChild(a);
        });

    }
    
    
    setTimeout(function() {
            setTimeout(main, 500);

    } ,1);


})();