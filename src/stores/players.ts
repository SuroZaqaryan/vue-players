import { computed, ref } from "vue";
import { defineStore } from 'pinia';
import moment from "moment";
import { usePlayers } from "@/api/hooks/usePlayers";

export const usePlayersStore = defineStore('usePlayersStore', () => {
    // Получаем игроков
    const { data, pending } = usePlayers();

    type OrderType = { birthday: string }
    type DateType = { name: string }

    const sortedPlayers = computed(() => {
        if (!data.value) return data.value;

        return [...data.value]
            .sort((a: DateType, b: DateType) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            }).map((a: OrderType) => ({
                ...a,
                birthday: moment(a.birthday, "DD MMMM YYYY", "ru").format("D MMMM YYYY [г.]"),
            })).sort((a: OrderType, b: OrderType) =>
                moment(a.birthday, "D MMMM YYYY [г.]", "ru").diff(
                    moment(b.birthday, "D MMMM YYYY [г.]", "ru")
                )
            );
    });


    return {
        sortedPlayers
    }
})