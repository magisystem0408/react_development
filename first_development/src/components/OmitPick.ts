import React from 'react';

type User = {
    id: string
    name: string
    email: string
    address: string
}

// PICKは選択する
type UserItemPick = Pick<User, "name" | "email">

// Omitはそれ以外
type UserItemOmit = Omit<User, "id" | "address">

const userPick: UserItemPick = {
    name: "hoge",
    email: "hoge@example.com",
}
const userOmit: UserItemOmit = {
    name: "hoge",
    email: "fuga",
}

console.log(userPick, userOmit)