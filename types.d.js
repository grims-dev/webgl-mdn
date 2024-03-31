/**
 * @typedef {WebGLBuffer | null} Buffer
 *
 * @typedef {Object} Buffers
 * @property {Buffer} position
 * @property {Buffer} indices
 * @property {Buffer} textureCoord
 *
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program - The WebGL program.
 * @property {Object} attribLocations - Object containing attribute locations.
 * @property {number} attribLocations.vertexPosition - The attribute location for vertex position.
 * @property {number} attribLocations.textureCoord - The attribute location for vertex color.
 * @property {Object} uniformLocations - Object containing uniform locations.
 * @property {WebGLUniformLocation | null} uniformLocations.projectionMatrix - The uniform location for projection matrix.
 * @property {WebGLUniformLocation | null} uniformLocations.modelViewMatrix - The uniform location for model view matrix.
 * @property {WebGLUniformLocation | null} uniformLocations.uSampler - The uniform location for the texture sampler.
 */
