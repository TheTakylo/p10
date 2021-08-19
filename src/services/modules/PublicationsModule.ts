import axios from 'axios'
import PublicationObject from '@/entities/PublicationObject'
import AuthModule from '@/services/modules/AuthModule'
import CommentObject from '@/entities/CommentObject'

const API_URL = 'http://localhost:8000/api'

class PublicationsModule {
  async getPublications (): Promise<PublicationObject[] | []> {
    const config = {
      headers: { Authorization: 'Bearer ' + AuthModule.getToken() }
    }

    return await axios
      .get(API_URL + '/posts', config)
      .then((response) => {
        const publications = []

        for (const p of response.data) {
          publications.push(new PublicationObject(p))
        }

        return publications
      })
  }

  async getPublication (id: number): Promise<PublicationObject> {
    const config = {
      headers: { Authorization: 'Bearer ' + AuthModule.getToken() }
    }

    return await axios
      .get(API_URL + '/posts/' + id, config)
      .then((response) => {
        return new PublicationObject(response.data)
      })
  }

  async postPublication (data: { image: string, content: string }): Promise<never> {
    const config = {
      headers: { Authorization: 'Bearer ' + AuthModule.getToken() }
    }

    return await axios
      .post(API_URL + '/posts', data, config)
  }

  async getComments (publicationId: number): Promise<CommentObject[] | []> {
    const config = {
      headers: { Authorization: 'Bearer ' + AuthModule.getToken() }
    }

    return await axios
      .get(API_URL + '/posts/' + publicationId + '/comments', config)
      .then((response) => {
        const comments = []

        for (const c of response.data) {
          comments.push(new CommentObject(c))
        }

        return comments
      })
  }
}

export default new PublicationsModule()
