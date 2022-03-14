const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometrySolid = new THREE.CubeGeometry( 3, 3, 3)
var geometry = new THREE.CubeGeometry( 10, 10, 10)
var materialSolid = new THREE.MeshStandardMaterial( { color: 0xd29bfd, flatShading: true, metalness: 0, roughness: 1 })
var material = new THREE.MeshBasicMaterial( {
    color: "#800080", wireframe: true, transparent: true
   })

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.2)
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
var cone = new THREE.Mesh ( geometrySolid, materialSolid)
var coneWireframe = new THREE.Mesh ( geometry, material )



scene.add( cone, ambientLight, pointLight, coneWireframe )
renderer.render( scene, camera )
camera.position.z = 16

function animate() {
    requestAnimationFrame( animate )
    cone.rotation.x += 0.03;
    cone.rotation.y += 0.03;
    coneWireframe.rotation.x -= 0.01;
    coneWireframe.rotation.y -= 0.01;
    renderer.render( scene, camera )
   }
   animate()