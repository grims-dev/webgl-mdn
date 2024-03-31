/**
 * @typedef {WebGLBuffer | null} Buffer
 *
 * @typedef {Object} Buffers
 * @property {Buffer} position
 *
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program - The WebGL program.
 * @property {Object} attribLocations - Object containing attribute locations.
 * @property {number} attribLocations.vertexPosition - The attribute location for vertex position.
 * @property {Object} uniformLocations - Object containing uniform locations.
 * @property {WebGLUniformLocation | null} uniformLocations.projectionMatrix - The uniform location for projection matrix.
 * @property {WebGLUniformLocation | null} uniformLocations.modelViewMatrix - The uniform location for model view matrix.
 */
