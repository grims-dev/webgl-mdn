import "./types.d.js";
import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

main();

/**
 * Initialise a shader program, so WebGL knows how to draw our data.
 * @param {WebGLRenderingContext} gl
 * The canvas context to run the processing on.
 * @param {string} vsSource
 * The vertex shader, ran for each vertex on each rendered shape.
 * @param {string} fsSource
 * The fragment shader, called once for every pixel on each rendered shape.
 * @returns {WebGLProgram | null}
 */
function initShaderProgram(gl, vsSource, fsSource) {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (vertexShader === null || fragmentShader === null) {
        console.error("One of your shaders is null");
        return null;
    }

    const shaderProgram = gl.createProgram();

    if (shaderProgram === null) {
        return null;
    }

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
        alert(
            `Unable to initialize the shader program: ${gl.getProgramInfoLog(
                shaderProgram,
            )}`,
        );
        return null;
    }

    return shaderProgram;
}

/**
 * Initialise a shader program so WebGL knows how to draw our data.
 * @param {WebGLRenderingContext} gl
 * The canvas context to run the processing on.
 * @param {number} type
 * The specified type of shader to be loaded.
 * @param {string} source
 * The shader source to be loaded.
 * @returns {WebGLShader | null}
 */
function loadShader(gl, type, source) {
    const shader = gl.createShader(type);

    if (shader === null) {
        return null;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(
            `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
        );
        gl.deleteShader(shader);
        return null;
    }

    return shader;
}

/**
 * Initialises the WebGL processes from a canvas.
 * @returns {void}
 */
function main() {
    const canvas = document.querySelector("canvas#glcanvas");
    if (canvas === null || !(canvas instanceof HTMLCanvasElement)) {
        alert(
            "Unable to locate canvas.",
        );
        return;
    }

    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (gl === null) {
        alert(
            "Unable to initialize WebGL. Your browser or machine may not support it.",
        );
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    const vsSource = `
        attribute vec4 aVertexPosition;
        uniform mat4 uModelViewMatrix;
        uniform mat4 uProjectionMatrix;
        void main() {
            gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        }
    `;

    const fsSource = `
        void main() {
            gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
        }
    `;

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

    if (shaderProgram === null) {
        console.error("Shader program not initialised");
        return;
    }

    // Info required to use the shader program.
    const programInfo = {
        program: shaderProgram,
        attribLocations: {
            vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
        },
        uniformLocations: {
            projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
            modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
        }
    }

    const buffers = initBuffers(gl);

    // Draw the scene
    drawScene(gl, programInfo, buffers);
}