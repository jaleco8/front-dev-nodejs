<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer v-model="drawer" app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"></v-avatar>

        <div>john@vuetifyjs.com</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="[icon, text] in links" :key="icon" link>
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-subheader>Transcript</v-subheader>

              <v-list two-line v-if="transcripts.length > 0">
                <template v-for="transcript in transcripts">
                  <v-list-item :key="transcript?.Id">
                    <v-list-item-avatar color="grey darken-1">
                      <v-icon dark> mdi-emoticon-happy-outline </v-icon>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        >{{ transcript.ParticipantRole }}
                        {{ transcript.BeginOffsetMillis }} -
                        {{ transcript.EndOffsetMillis }}</v-list-item-title
                      >

                      <v-list-item-subtitle>
                        {{ transcript.Content }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getTranscript } from "../api/transcript";
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
    transcripts: [],
  }),
  methods: {
    async getTranscript() {
      this.transcripts = await getTranscript();
    },
  },
  created() {
    this.getTranscript();
  },
};
</script>
