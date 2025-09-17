import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, CreditCard, AlertTriangle, Scale, Phone } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Conditions Générales d'Utilisation</h1>
          <p className="text-xl text-muted-foreground">Conditions d'utilisation de la plateforme SkillForge</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                <CardTitle>1. Objet et Champ d'Application</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation de la plateforme
                SkillForge, service de génération automatisée de portfolios de compétences techniques.
              </p>
              <p>
                L'utilisation de nos services implique l'acceptation pleine et entière des présentes CGU. Si vous
                n'acceptez pas ces conditions, veuillez ne pas utiliser notre plateforme.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle>2. Inscription et Comptes Utilisateurs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Conditions d'inscription</h4>
              <ul className="space-y-2 text-sm">
                <li>• Être âgé de 18 ans minimum ou avoir l'autorisation parentale</li>
                <li>• Fournir des informations exactes et à jour</li>
                <li>• Maintenir la confidentialité de vos identifiants</li>
                <li>• Notifier immédiatement tout usage non autorisé</li>
              </ul>

              <h4 className="font-semibold mt-4">Types de comptes</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Compte Gratuit</p>
                  <ul className="text-sm space-y-1">
                    <li>• 3 portfolios par mois</li>
                    <li>• Templates de base</li>
                    <li>• Export PDF standard</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium">Compte Premium</p>
                  <ul className="text-sm space-y-1">
                    <li>• Portfolios illimités</li>
                    <li>• Templates personnalisés</li>
                    <li>• Export multi-formats</li>
                    <li>• Support prioritaire</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                <CardTitle>3. Tarification et Paiement</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Abonnements</h4>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Gratuit</p>
                    <p>0€/mois</p>
                  </div>
                  <div>
                    <p className="font-medium">Pro</p>
                    <p>29€/mois</p>
                  </div>
                  <div>
                    <p className="font-medium">Enterprise</p>
                    <p>Sur devis</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold">Conditions de paiement</h4>
              <ul className="space-y-2 text-sm">
                <li>• Paiement mensuel ou annuel par carte bancaire</li>
                <li>• Facturation automatique à la date d'anniversaire</li>
                <li>• Résiliation possible à tout moment</li>
                <li>• Remboursement au prorata en cas de résiliation anticipée</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <CardTitle>4. Utilisation Acceptable</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Usages autorisés</h4>
              <ul className="space-y-2 text-sm">
                <li>• Génération de portfolios professionnels légitimes</li>
                <li>• Utilisation dans le cadre de recrutement</li>
                <li>• Formation et développement professionnel</li>
              </ul>

              <h4 className="font-semibold">Usages interdits</h4>
              <ul className="space-y-2 text-sm">
                <li>• Création de faux profils ou informations mensongères</li>
                <li>• Utilisation à des fins illégales ou frauduleuses</li>
                <li>• Tentative de contournement des limitations techniques</li>
                <li>• Revente ou redistribution du service sans autorisation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Scale className="w-6 h-6 text-primary" />
                <CardTitle>5. Propriété Intellectuelle</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="font-semibold">Droits de SkillForge</h4>
              <p className="text-sm">
                La plateforme, ses algorithmes, templates et interfaces sont protégés par le droit d'auteur et restent
                la propriété exclusive de SkillForge.
              </p>

              <h4 className="font-semibold">Vos droits</h4>
              <p className="text-sm">
                Vous conservez tous les droits sur le contenu que vous téléchargez (CVs, informations personnelles). Les
                portfolios générés vous appartiennent et peuvent être utilisés librement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-primary" />
                <CardTitle>6. Support et Contact</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <p className="font-semibold mb-2">Service Client</p>
                <p className="text-sm">Email : support@skillforge.fr</p>
                <p className="text-sm">Téléphone : +33 1 23 45 67 89</p>
                <p className="text-sm">Horaires : Lundi-Vendredi 9h-18h</p>
              </div>

              <p className="text-sm">
                Pour les comptes Premium et Enterprise, un support prioritaire est disponible avec des temps de réponse
                garantis.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 text-sm text-muted-foreground">
          <p>Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
          <p className="mt-2">
            Ces conditions sont régies par le droit français. Tout litige sera soumis aux tribunaux compétents de Paris.
          </p>
        </div>
      </div>
    </div>
  )
}
