namespace SpriteKind {
    export const MrBeanz = SpriteKind.create()
}
tiles.setCurrentTilemap(tilemap`level2`)
let MrBeanz = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 1 1 f f f f . . . . . . 
    . . . 1 1 f 1 1 f f . . . . . . 
    . . f 1 f f f 1 1 f f f . . . . 
    . . f 1 f f f f 1 f f f . . . . 
    . . . f 1 1 f f 1 f f f . . . . 
    . . . f f f 1 1 1 f f f . . . . 
    . . . f f f f 1 1 f f f f . . . 
    . . . f f f f f 1 f f f . . . . 
    . . . f f f f 1 1 f f f . . . . 
    . . . f f f 1 1 1 f f . . . . . 
    . . . . f f 1 1 f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.MrBeanz)
forever(function () {
    controller.moveSprite(MrBeanz)
    scene.cameraFollowSprite(MrBeanz)
})
