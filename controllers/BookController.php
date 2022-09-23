<?php

namespace app\controllers;
use yii\data\ActiveDataProvider;
use yii\rest\ActiveController;

class BookController extends \yii\web\Controller
{
    public $modelClass = 'app\models\Book';

    public function actions(): array 
    {
        $actions = parent::actions();
        $actions['index'] = [
            'class' => 'yii\rest\IndexAction',
            'modelClass' => $this->modelClass,
            'prepareDataProvider' => fn() => new ActiveDataProvider(
                [
                    'query' => $this->modelClass::find(),
                    'pagination' => false,
                ]
            ),
        ];

        return $actions;
    }

}
