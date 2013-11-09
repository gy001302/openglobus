// This file was autogenerated by D:\my projects\closure-library\closure\bin\build\depswriter.py.
// Please do not edit.
goog.addDependency('../../../og/src/og/ajax.js', ['og.Ajax'], []);
goog.addDependency('../../../og/src/og/bv/box.js', ['og.bv.Box'], ['og.bv', 'og.math.Vector3']);
goog.addDependency('../../../og/src/og/bv/bv.js', ['og.bv'], ['og.extent', 'og.geo', 'og.math']);
goog.addDependency('../../../og/src/og/bv/sphere.js', ['og.bv.Sphere'], ['og.bv', 'og.math.Vector3']);
goog.addDependency('../../../og/src/og/camera.js', ['og.Camera'], ['og.Frustum', 'og.math.Matrix4', 'og.math.Vector3']);
goog.addDependency('../../../og/src/og/class.js', ['og._class_'], []);
goog.addDependency('../../../og/src/og/control/control.js', ['og.control.Control'], []);
goog.addDependency('../../../og/src/og/control/keyboardNavigation.js', ['og.control.KeyboardNavigation'], ['og._class_', 'og.control.Control', 'og.input']);
goog.addDependency('../../../og/src/og/control/layerSwitcher.js', ['og.control.LayerSwitcher'], ['og._class_']);
goog.addDependency('../../../og/src/og/control/loadingSpinner.js', ['og.control.LoadingSpinner'], ['og._class_', 'og.control.Control']);
goog.addDependency('../../../og/src/og/control/mouseNavigation.js', ['og.control.MouseNavigation'], ['og._class_', 'og.control.Control', 'og.math', 'og.math.Matrix4', 'og.math.Vector3']);
goog.addDependency('../../../og/src/og/control/mousePosition.js', ['og.control.MousePosition'], ['og._class_', 'og.control.Control', 'og.geo', 'og.planetSegment']);
goog.addDependency('../../../og/src/og/control/showFps.js', ['og.control.ShowFps'], ['og._class_', 'og.control.Control']);
goog.addDependency('../../../og/src/og/control/toggleWireframe.js', ['og.control.ToggleWireframe'], ['og._class_', 'og.input', 'og.webgl']);
goog.addDependency('../../../og/src/og/ellipsoid/ellipsoid.js', ['og.Ellipsoid'], ['og.math']);
goog.addDependency('../../../og/src/og/ellipsoid/wgs84ellipsoid.js', ['og.ellipsoid.wgs84'], ['og.Ellipsoid']);
goog.addDependency('../../../og/src/og/extent/extent.js', ['og.extent', 'og.extent.Extent'], []);
goog.addDependency('../../../og/src/og/frustum.js', ['og.Frustum'], []);
goog.addDependency('../../../og/src/og/geo.js', ['og.geo'], []);
goog.addDependency('../../../og/src/og/input/input.js', ['og.input', 'og.input.Input'], []);
goog.addDependency('../../../og/src/og/layer/layer.js', ['og.layer', 'og.layer.Layer'], []);
goog.addDependency('../../../og/src/og/layer/wms.js', ['og.layer.WMS'], ['og._class_', 'og.layer.XYZ']);
goog.addDependency('../../../og/src/og/layer/xyz.js', ['og.layer.XYZ'], ['og._class_', 'og.layer.Layer', 'og.quadTree']);
goog.addDependency('../../../og/src/og/math/math.js', ['og.math'], []);
goog.addDependency('../../../og/src/og/math/matrix4.js', ['og.math.Matrix4'], ['og.math', 'og.math.Vector3', 'og.math.Vector4']);
goog.addDependency('../../../og/src/og/math/quaternion.js', ['og.math.Quaternion'], ['og.math', 'og.math.Matrix4']);
goog.addDependency('../../../og/src/og/math/vector3.js', ['og.math.Vector3'], []);
goog.addDependency('../../../og/src/og/math/vector4.js', ['og.math.Vector4'], ['og.math.Vector3']);
goog.addDependency('../../../og/src/og/node/axes.js', ['og.node.Axes'], ['og.node.Node3D']);
goog.addDependency('../../../og/src/og/node/node.js', ['og.node.Node'], []);
goog.addDependency('../../../og/src/og/node/node3D.js', ['og.node.Node3D'], ['og._class_', 'og.node.Node', 'og.webgl']);
goog.addDependency('../../../og/src/og/node/planet.js', ['og.node.Planet'], ['og', 'og.bv.Sphere', 'og.layer', 'og.math.Matrix4', 'og.math.Vector3', 'og.node.Node3D', 'og.planetSegment', 'og.planetSegment.PlanetSegmentHelper', 'og.quadTree', 'og.quadTree.QuadNode', 'og.shaderProgram.overlays', 'og.shaderProgram.single']);
goog.addDependency('../../../og/src/og/node/skyBox.js', ['og.node.SkyBox'], ['og', 'og.node.Node3D']);
goog.addDependency('../../../og/src/og/og.js', ['og'], []);
goog.addDependency('../../../og/src/og/planetSegment/planetSegment.js', ['og.planetSegment', 'og.planetSegment.PlanetSegment'], ['og.bv.Box', 'og.bv.Sphere', 'og.extent', 'og.geo', 'og.layer', 'og.math', 'og.math.Vector3', 'og.planetSegment.PlanetSegmentHelper']);
goog.addDependency('../../../og/src/og/planetSegment/planetSegmentHelper.js', ['og.planetSegment.PlanetSegmentHelper'], ['og.quadTree']);
goog.addDependency('../../../og/src/og/planetSegment/planetSegmentMaterial.js', ['og.planetSegment.PlanetSegmentMaterial'], []);
goog.addDependency('../../../og/src/og/quadTree/quadNode.js', ['og.quadTree.QuadNode'], ['og.extent', 'og.planetSegment.PlanetSegment', 'og.planetSegment.PlanetSegmentMaterial', 'og.quadTree']);
goog.addDependency('../../../og/src/og/quadTree/quadTree.js', ['og.quadTree'], []);
goog.addDependency('../../../og/src/og/renderer.js', ['og.Renderer'], ['og.Camera', 'og.input', 'og.input.Input', 'og.math.Vector3']);
goog.addDependency('../../../og/src/og/shaderProgram/callbacks.js', ['og.shaderProgram.callbacks'], ['og.shaderProgram.types']);
goog.addDependency('../../../og/src/og/shaderProgram/overlays.js', ['og.shaderProgram.overlays'], ['og.shaderProgram', 'og.shaderProgram.ShaderProgram', 'og.shaderProgram.types', 'og.utils']);
goog.addDependency('../../../og/src/og/shaderProgram/shaderProgram.js', ['og.shaderProgram', 'og.shaderProgram.ShaderProgram'], ['og.shaderProgram.callbacks']);
goog.addDependency('../../../og/src/og/shaderProgram/single.js', ['og.shaderProgram.single'], ['og.shaderProgram', 'og.shaderProgram.ShaderProgram', 'og.shaderProgram.types']);
goog.addDependency('../../../og/src/og/shaderProgram/skybox.js', ['og.shaderProgram.skybox'], ['og.shaderProgram', 'og.shaderProgram.ShaderProgram', 'og.shaderProgram.types', 'og.utils']);
goog.addDependency('../../../og/src/og/shaderProgram/types.js', ['og.shaderProgram.types'], []);
goog.addDependency('../../../og/src/og/terrainProvider/terrainProvider.js', ['og.terrainProvider', 'og.terrainProvider.TerrainProvider'], ['og.Ajax', 'og.layer', 'og.quadTree']);
goog.addDependency('../../../og/src/og/utils/utils.js', ['og.utils'], ['og.Ajax']);
goog.addDependency('../../../og/src/og/webgl/handler.js', ['og.webgl.Handler'], ['og.math', 'og.webgl']);
goog.addDependency('../../../og/src/og/webgl/webgl.js', ['og.webgl'], ['og.utils']);
