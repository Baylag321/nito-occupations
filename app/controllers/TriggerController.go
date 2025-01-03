package controllers

import (
	"lambda/lambda/models/form/formModels"

	gonanoid "github.com/matoous/go-nanoid/v2"
)

func NewAfterUpdate(newData interface{}) {
	//news := newData.(*formModels.EoNews29)
	//
}

func BeforeUpdate(newData interface{}) {
	data := newData.(*formModels.Occupations1)

	newID, err := gonanoid.Generate("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 26)
	if err != nil {
		return
	}

	data.ID = newID
}

func BeforeUpdateSub(newData interface{}) {
	data := newData.(*formModels.Occupations5)

	newID, err := gonanoid.Generate("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 26)
	if err != nil {
		return
	}

	data.ID = newID
}
