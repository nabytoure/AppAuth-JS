"use strict";
/*
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = require("crypto");
var crypto_utils_1 = require("../crypto_utils");
var DEFAULT_SIZE = 1; /** size in bytes */
exports.nodeCryptoGenerateRandom = function (sizeInBytes) {
    if (sizeInBytes === void 0) { sizeInBytes = DEFAULT_SIZE; }
    var bytes = crypto.randomBytes(sizeInBytes);
    return crypto_utils_1.bufferToString(new Uint8Array(bytes.buffer));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J5cHRvX3V0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL25vZGVfc3VwcG9ydC9jcnlwdG9fdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRzs7QUFFSCwrQkFBaUM7QUFFakMsZ0RBQWdFO0FBRWhFLElBQU0sWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtBQUUvQixRQUFBLHdCQUF3QixHQUFvQixVQUFDLFdBQTBCO0lBQTFCLDRCQUFBLEVBQUEsMEJBQTBCO0lBQ2xGLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUMsT0FBTyw2QkFBYyxDQUFDLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgSW5jLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0XG4gKiBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlXG4gKiBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlclxuICogZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgKiBhcyBjcnlwdG8gZnJvbSAnY3J5cHRvJztcblxuaW1wb3J0IHtidWZmZXJUb1N0cmluZywgUmFuZG9tR2VuZXJhdG9yfSBmcm9tICcuLi9jcnlwdG9fdXRpbHMnO1xuXG5jb25zdCBERUZBVUxUX1NJWkUgPSAxOyAvKiogc2l6ZSBpbiBieXRlcyAqL1xuXG5leHBvcnQgY29uc3Qgbm9kZUNyeXB0b0dlbmVyYXRlUmFuZG9tOiBSYW5kb21HZW5lcmF0b3IgPSAoc2l6ZUluQnl0ZXMgPSBERUZBVUxUX1NJWkUpID0+IHtcbiAgY29uc3QgYnl0ZXMgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoc2l6ZUluQnl0ZXMpO1xuICByZXR1cm4gYnVmZmVyVG9TdHJpbmcobmV3IFVpbnQ4QXJyYXkoYnl0ZXMuYnVmZmVyKSk7XG59O1xuIl19