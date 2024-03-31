import "./types.d.js";

/**
 * Get the position buffer from the context.
 * @param {WebGLRenderingContext} gl
 * Context from which to grab the position buffer.
 * @returns {Buffers}
 */
function initBuffers(gl) {
    return {
        position: initPositionBuffer(gl),
        color: initColorBuffer(gl)
    }
}

/**
 * Initialise the position buffer on a context.
 * @param {WebGLRenderingContext} gl
 * Context to create buffer on.
 * @returns {Buffer}
 */
function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(
        [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]
    ), gl.STATIC_DRAW);

    return positionBuffer;
}

/**
 * Initialise the position buffer on a context.
 * @param {WebGLRenderingContext} gl
 * Context to create buffer on.
 * @returns {Buffer}
 */
function initColorBuffer(gl) {
    const colors = [
        1.0,
        1.0,
        1.0,
        1.0, // white
        1.0,
        0.0,
        0.0,
        1.0, // red
        0.0,
        1.0,
        0.0,
        1.0, // green
        0.0,
        0.0,
        1.0,
        1.0, // blue
    ];

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    return colorBuffer;
}

export { initBuffers };
