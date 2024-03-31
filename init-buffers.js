import "./types.d.js";

/**
 * Get the position buffer from the context.
 * @param {WebGLRenderingContext} gl
 * Context from which to grab the position buffer.
 * @returns {Buffers}
 */
function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);

    return {
        position: positionBuffer,
    }
}

/**
 * Initialise the position buffer from a context.
 * @param {WebGLRenderingContext} gl
 * Context to create buffer from.
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

export { initBuffers };
