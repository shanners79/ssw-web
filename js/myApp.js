var myApp=angular.module('myApp', [])
    .controller('AlbumCtrl', function($scope) {
        $scope.images = [
            {image : 'img/lough_rough_750.jpg', description : 'This is a lovely example of Liscannor Lough Random stone. Which we guillotined on site ourselves.'},
            {image : 'img/fireplace750_500.jpg', description : 'Nice fireplace, bla bla'},
            {image : 'img/tim.jpg', description : 'Lovely house Bweeng bla bla fucking bla'},
            {image : 'img/slide-1.jpg', description : 'Big house woopty do'},
            {image : 'img/slide-3.jpg', description : 'Bigger house fml'},
            {image : 'img/fireplace750_500.jpg', description : 'Nice fireplace, bla bla'},
            {image : 'img/tim.jpg', description : 'Lovely house Bweeng bla bla fucking bla'},
            {image : 'img/slide-1.jpg', description : 'Big house woopty do'},
            {image : 'img/slide-3.jpg', description : 'Bigger house fml'}
        ];

        $scope.currentImage = _.first($scope.images);

        $scope.setCurrentImage = function(image) {
            $scope.currentImage = image;
        };
    });