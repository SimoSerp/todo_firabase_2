import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { db, ROOT_REF } from "../firebase/Config";
import styles from "../style/style";

export const TodoItem = ({todoItem: {todoItem: title, done}, id}) => {
    const [doneState, setDone] = useState(done);

    const onCheck = () => {
        setDone(!doneState);
        db.ref(ROOT_REF).update({
            [id]: {
                todoItem: title,
                done: !doneState,
            },
        });
    };

    const onRemove = () => {
        console.log(id);
        db.ref(ROOT_REF + [id]).remove();
        console.log("removing");
    };

    return (
        <View style={styles.todoItem}>
            <Pressable onPress={onCheck}>
                {doneState
                    ? <MaterialIcons name={'check-box'} size={32} />
                    : <MaterialIcons name={'check-box-outline-blank'} size={32}/>
                }
            </Pressable>
            <Text onPress={onCheck}
                style={
                    [styles.todoText,
                    {backgroundColor: doneState ? "lightgreen" : "lightblue"}]}>{title}
            </Text>
            <Pressable>
                <Entypo name={'trash'} size={32} onPress={onRemove} />
            </Pressable>
        </View>
    );
}