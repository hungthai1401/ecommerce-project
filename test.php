<?php
/**
 * Created by PhpStorm.
 * User: Admin
 * Date: 3/11/2017
 * Time: 10:05 AM
 */

function canBacN($base, $exp)
{
    return pow($base, 1/$exp);
}

echo canBacN(27, 3);