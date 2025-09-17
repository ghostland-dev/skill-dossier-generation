import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Database, UserCheck, Globe } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Politique de Confidentialité</h1>
          <p className="text-xl text-muted-foreground">
            Votre vie privée est notre priorité. Découvrez comment nous protégeons vos données.
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                <CardTitle>Protection des Données</CardTitle>
              </div>
              <CardDescription>Conformité RGPD et sécurité de vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                SkillForge s'engage à protéger vos données personnelles conformément au Règlement Général sur la
                Protection des Données (RGPD). Nous collectons uniquement les informations nécessaires au fonctionnement
                de notre service.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Chiffrement de bout en bout de vos CVs et portfolios</li>
                <li>• Stockage sécurisé sur serveurs européens certifiés</li>
                <li>• Accès limité aux données par notre équipe technique</li>
                <li>• Suppression automatique des données inactives après 2 ans</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                <CardTitle>Données Collectées</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Nous collectons les types de données suivants :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Données d'identification</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Nom et prénom</li>
                    <li>• Adresse email</li>
                    <li>• Informations de contact</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Données professionnelles</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Contenu des CVs téléchargés</li>
                    <li>• Compétences et expériences</li>
                    <li>• Portfolios générés</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                <CardTitle>Vos Droits</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Conformément au RGPD, vous disposez des droits suivants :</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Droit d'accès</strong> : Consulter vos données
                  </li>
                  <li>
                    • <strong>Droit de rectification</strong> : Corriger vos informations
                  </li>
                  <li>
                    • <strong>Droit à l'effacement</strong> : Supprimer vos données
                  </li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li>
                    • <strong>Droit à la portabilité</strong> : Récupérer vos données
                  </li>
                  <li>
                    • <strong>Droit d'opposition</strong> : Refuser le traitement
                  </li>
                  <li>
                    • <strong>Droit de limitation</strong> : Restreindre l'usage
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                <CardTitle>Sécurité Technique</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Mesures de sécurité mises en place :</p>
              <ul className="space-y-2 text-sm">
                <li>• Chiffrement AES-256 pour le stockage des données</li>
                <li>• Connexions HTTPS/TLS pour tous les échanges</li>
                <li>• Authentification multi-facteurs pour les comptes administrateurs</li>
                <li>• Audits de sécurité réguliers par des tiers certifiés</li>
                <li>• Sauvegarde chiffrée et géo-répliquée</li>
                <li>• Surveillance 24/7 des accès et tentatives d'intrusion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                <CardTitle>Contact et Réclamations</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Pour exercer vos droits ou pour toute question concernant cette politique de confidentialité :</p>
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold">Délégué à la Protection des Données</p>
                <p className="text-sm">Email : dpo@skillforge.fr</p>
                <p className="text-sm">Adresse : 123 Rue de la Tech, 75001 Paris, France</p>
              </div>
              <p className="text-sm text-muted-foreground">
                Vous pouvez également déposer une réclamation auprès de la CNIL (Commission Nationale de l'Informatique
                et des Libertés) si vous estimez que vos droits ne sont pas respectés.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
        </div>
      </div>
    </div>
  )
}
